import { Router } from "express";
import * as AuthController from "../controllers/authController";


const router = Router();

router.get("/ping", AuthController.ping);
router.get("/login", AuthController.login);
router.post("/register", AuthController.register);


export default router;