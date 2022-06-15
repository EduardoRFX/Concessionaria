import express from 'express'
import carroController from '../controllers/carroController.js'

const router = express.Router()

router 

    .get("/carros/", carroController.buscarTodosOsCarros)
    .get("/carros/:id", carroController.buscarCarroPorID)
    .post("/carros/", carroController.adicionarCarro)
    .patch("/carros/:id", carroController.atualizarCarro)
    .delete("/carros/:id", carroController.deletarCarro)




export default router