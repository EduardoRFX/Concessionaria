import express from 'express'
import motoController from '../controllers/motoController.js'

const router = express.Router()

router

    .get("/motos/", motoController.buscarTodasAsMotos)
    .get("/motos/:id", motoController.buscarMotoPorID)
    .post("/motos/", motoController.AdicionarMoto)
    .patch("/motos/:id", motoController.atualizarMoto)
    .delete("/motos/:id", motoController.deletarMoto)




export default router 