import User from "../models/User";
class UserController {
  async store(req, res) {
  try {
      const novoUsuario = await User.create(req.body);
      const { id, nome, email } = novoUsuario;
      return res.json( { id, nome, email } );
    } catch(e) {
      return res.status(400).json({
        msg: "Não foi possível criar um novo usuário.",
        errors: `Erro: ${e}`,
      });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
     } catch(e) {
      return res.json(null);
     }
  }
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
     } catch(e) {
      return res.json(null);
     }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if(!user) return res.status(400).json({
        errors: ['User not exists'],
      })
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
     } catch(e) {
      return res.status(400).json({
        errors: `Erro: ${e}`,
      });
     }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if(!user) return res.status(400).json({
        errors: ['Usuario não existe'],
      })
      await user.destroy();
      return res.json({
        msg: 'Usuário foi apagado da base de dados.'
      });
     } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
     }
  }

}

export default new UserController();
