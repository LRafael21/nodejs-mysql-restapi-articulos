import { Router } from "express";
import { getArticulos, createArticulos, updateArticulos, deleteArticulos } from '../controllers/articulos.controllers.js'

const router = Router()

router.get('/articulos', getArticulos)

router.post('/articulos', createArticulos)

router.put('/articulos', updateArticulos)

router.delete('/articulos', deleteArticulos)

export default router