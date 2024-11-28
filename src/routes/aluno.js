import { Router } from "express";
import AlunoController from "../controllers/AlunoController"
import LoginRequired from "../middlewares/LoginRequired";

const router = new Router;

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);

router.post('/', LoginRequired, AlunoController.store);
router.put('/:id', LoginRequired, AlunoController.update);
router.delete('/:id', LoginRequired, AlunoController.delete);

export default router;
