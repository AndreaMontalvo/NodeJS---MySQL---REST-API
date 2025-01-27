import { pool } from "../db.js";


import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


export const ping = async (req, res) => {
    const [result] = await pool.query("SELECT 1 + 1 as result");
    res.json(result)
}

export const index = (req, res) => {
    const camino = path.join(__dirname, '..', "index.html")
    res.sendFile(`${camino}`)

    
}