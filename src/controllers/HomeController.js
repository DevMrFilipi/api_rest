import Aluno from "../models/Aluno";
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

export default new HomeController();
