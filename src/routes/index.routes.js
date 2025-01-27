import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router()



/*CHEQUEO DE CONEXION */
router.get("/ping", ping)

export default router