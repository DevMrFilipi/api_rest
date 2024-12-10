"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
require('dotenv').config();

class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body
      if(!email || !password) return res.status(401).json({
        errors: ['Informações incorretas. Verifique os campos informados. E1'],
      });

      const user = await _User2.default.findOne({ where: {email} });

      if(!user) return res.status(400).json({
        errors: ['Informações incorretas. Verifique os campos informados. E2'],
      })

      if(!(await user.passwordIsValid(password))) return res.status(401).json({
        errors: ['Informações incorretas. Verifique os campos informados. E3'],
      });

      const { id } = user;
      const tokenUser = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
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

exports. default = new TokenController();
