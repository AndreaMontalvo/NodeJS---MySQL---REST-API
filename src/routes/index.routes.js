import { Router } from "express";
import { ping, index } from "../controllers/index.controller.js";

const router = Router()



/*CHEQUEO DE CONEXION */
router.get("/ping", ping)

/*PAGINA PRINCIPAL (INDEX) */
router.get("/",  index)




export default router