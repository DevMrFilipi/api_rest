import { Router } from "express";

import photoController from "../controllers/PhotoController";
import LoginRequired from "../middlewares/LoginRequired";


const router = new Router();

router.post("/", LoginRequired, photoController.store);

export default router;
