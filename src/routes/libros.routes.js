import { Router } from "express";
import  { getLibros, postLibros, patchLibros, deleteLibro, getLibro } from "../controllers/libros.controller.js";

const router = Router();

router.get("/libros", getLibros)
router.get("/libros/:id", getLibro)

router.post("/libros", postLibros)

router.patch("/libros/:id", patchLibros)

router.delete("/libros/:id", deleteLibro)

export default router;
