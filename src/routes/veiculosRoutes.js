import express from 'express'
import VeiculosAll from '../controllers/veiculosAll.js'

const router = express.Router()

router 

    .get("/veiculosAll/", VeiculosAll.todosOsVeiculos)


export default router