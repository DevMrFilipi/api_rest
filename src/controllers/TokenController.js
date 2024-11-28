import User from "../models/User";
import jwk from "jsonwebtoken";
require('dotenv').config();

class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body
      if(!email || !password) return res.status(401).json({
        errors: ['Informações incorretas. Verifique os campos informados. E1'],
      });

      const user = await User.findOne({ where: {email} });

      if(!user) return res.status(400).json({
        errors: ['Informações incorretas. Verifique os campos informados. E2'],
      })

      if(!(await user.passwordIsValid(password))) return res.status(401).json({
        errors: ['Informações incorretas. Verifique os campos informados. E3'],
      });

      const { id } = user;
      const tokenUser = jwk.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      })

      res.json({ tokenUser })
     } catch(e) {
      return res.status(401).json({
        errors: `Erro: ${e}`,
      });
     }
  }
}

export default new TokenController();
