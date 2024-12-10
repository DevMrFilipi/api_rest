"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ["url", "filename"],
        }
      });
      return res.json(alunos);
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      const { nome, email } = aluno;
      return res.json({ nome, email });
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) res.status(401).json({ errors: `ID inválido` });

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) res.status(401).json({ errors: `Aluno inválido` });

      const { nome, sobrenome, email } = aluno;
      return res.json({ nome, sobrenome, email });
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) res.status(401).json({ errors: `ID inválido` });

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) res.status(401).json({ errors: `Aluno inválido` });

      const { nome, sobrenome, email } = await aluno.update(req.body);

      return res.json({ nome, sobrenome, email });
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) res.status(401).json({ errors: `ID inválido` });

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) res.status(401).json({ errors: `Aluno inválido` });

      await aluno.destroy();
      return res.json({
        apagado: "true",
      });
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }
}

exports. default = new AlunoController();
