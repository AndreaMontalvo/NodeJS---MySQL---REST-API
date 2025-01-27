import { pool } from "../db.js";

/*Listar todos los libros */
export const getLibros = async (req, res) => {
    try{
        const [fila] = await pool.query("SELECT * FROM libros")
        res.json(fila);
    }
    catch(error){
        return res.status(500).json({ mensaje: "Algo fue mal"})
    }

}

/*Listar libro por id */
export const getLibro = async (req, res) => {
    try {
        const [fila] = await pool.query("SELECT * FROM libros WHERE id = ?", [req.params.id])

        if (fila.length <=0) { return res.status(404).json({mensaje: "Libro no encontrado"})
            
        }
    
        res.json(fila[0]);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo fue mal"})
        
    }
}


/*Insertar un libro */
export const postLibros = async (req, res) => {
    try {
            
        const {nombre, titulo, precio, cantidad, tienda} = req.body

        const [fila] = await pool.query("INSERT INTO libros (nombre, titulo, precio, cantidad, tienda) VALUES (?, ?, ?, ?, ?)", [nombre, titulo, precio, cantidad, tienda])

        //console.log(req.body)
        res.send({
            id: fila.insertId,
            nombre,
            titulo,
            precio,
            cantidad,
            tienda
        });
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo fue mal"})
        
    }
}

/* Editar un libro */
export const patchLibros = async (req, res) => {
    const {id} = req.params
    const {nombre, titulo, precio, cantidad, tienda} = req.body
    try {
    
        const [resultado] = await pool.query("UPDATE libros SET nombre = IFNULL(?, nombre), titulo = IFNULL(?, titulo), precio = IFNULL(?, precio), cantidad = IFNULL(?, cantidad), tienda = IFNULL(?, tienda) WHERE id = ?", [nombre, titulo, precio, cantidad, tienda, id])
    
        if (resultado.affectedRows ===0) { return res.status(404).json({mensaje: "Libro no encontrado"})
            
        }
    
        const [filas] = await pool.query("SELECT * FROM libros WHERE id = ?", [id])
    
    
        console.log(resultado)
        res.json(filas[0])
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo fue mal"})
        
    }

}

/* Borrar un libro */

export const deleteLibro = async (req, res) => {
    try {
        const [resultado] = await pool.query("DELETE FROM libros WHERE id = ?", [req.params.id])

        if (resultado.affectedRows <= 0) { return res.status(404).json({mensaje: "Libro no encontrado"})
            
        }
        
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ mensaje: "Algo fue mal"})
        
    }
}