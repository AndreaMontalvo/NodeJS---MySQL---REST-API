import  express from "express";
import  librosRoutes  from "./routes/libros.routes.js";
import indexRoutes from "./routes/index.routes.js";

/* imports necesarios para usar __dirname */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

/* Utilizado para servir archivos estaticos (img, css) */
app.use(express.static(path.join(__dirname, "public")))

/* Funcion para interpretar JSONs procesados */
app.use(express.json())

/*RUTA DE PRUEBA DE CONEXION*/
app.use(indexRoutes)
/*RUTAS LIBRO */
app.use("/api", librosRoutes)

/*RUTA NOT FOUND */
app.use((req, res, next) => {
    res.status(404).json({ mensaje : "Endpoint no encontrado"})
})



export default app