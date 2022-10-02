import { pool } from "../db.js"

export const getArticulos = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM articulo')  
    res.json(rows)
}

export const createArticulos = async (req, res) => {
    const {descripcion,marca,existencia} = req.body
    const [rows] = await pool.query('INSERT INTO articulo (descripcion,marca,existencia) VALUES(?,?,?)', [descripcion,marca,existencia])
    res.send({
        id: rows.insertId,
        descripcion,
        marca,
        existencia,
    })
}

export const updateArticulos = (req, res) => res.send('actualizando empleados')

export const deleteArticulos = (req, res) => res.send('eliminando empleados')