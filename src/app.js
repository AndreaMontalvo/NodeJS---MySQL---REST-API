import  express from "express";
import  librosRoutes  from "./routes/libros.routes.js";
import indexRoutes from "./routes/index.routes.js";
const app = express();

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