import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 à 255 caracteres',
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe.'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 à 50 caracteres',
          }
        },
      },
    }, {
      sequelize,
    })
    this.addHook('beforeSave', async user => {
      if(!user.password) return
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
