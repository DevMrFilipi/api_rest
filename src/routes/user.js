import { Router } from "express";
import userController from "../controllers/UserController"

import LoginRequired from "../middlewares/LoginRequired";
const router = new Router;

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', LoginRequired, userController.store);
router.put('/', LoginRequired, userController.update);
router.delete('/', LoginRequired, userController.delete);
export default router;

/**
 * index -> lista todos os usuários GET
 * store/create -> cria um novo usuário POST
 * delete -> apaga um usuário DELETE
 * show -> mostra um usuário GET
 * update -> atualiza um usuário PATCH OU PUT
 */
