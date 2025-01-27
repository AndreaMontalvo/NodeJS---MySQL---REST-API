import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router()



/*CHEQUEO DE CONEXION */
router.get("/ping", ping)

router.get("/pepe",  (req, res) => {
    res.redirect("https://roadmap.sh/frontend")
})




export default router