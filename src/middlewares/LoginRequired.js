 import jwk from 'jsonwebtoken';
 import User from '../models/User';
 require("dotenv").config();

 export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido.'],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwk.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      }
    });

    if(!user) {
      res.status(401).json({
        errors: ['Usuário inválido'],
      })
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch(e) {
    console.log(e);
    res.status(401).json({
      errors: ['Token expirado ou inválido'],
    })
  }

}
