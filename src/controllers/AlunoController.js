import Aluno from "../models/Aluno";
class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.status(401).json({
        errors: `Error: ${e}`,
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
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

      const aluno = await Aluno.findByPk(id);

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

      const aluno = await Aluno.findByPk(id);

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

      const aluno = await Aluno.findByPk(id);

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

export default new AlunoController();
