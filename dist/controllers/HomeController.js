"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
class HomeController {
  async index(req, res) {
    // const novoAluno = await Aluno.create({
    //   nome: 'Filipi',
    //   sobrenome: 'Serpa',
    //   email: 'filipiserpa.ti@gmail.com',
    //   idade: 21,
    //   altura: 1.77,
    //   peso: 85,
    // })
    // res.json(novoAluno)
  }
}

exports. default = new HomeController();
