import express from 'express'
import carrosRoutes from './carrosRoutes.js'
import motosRoutes from './motosRoutes.js'
import veiculosAll from './veiculosRoutes.js'

const routes = (app) =>{
    app.get("/",(req, res) =>{
        res.status(200).json({message: "Bem vindo ao sistema da Concessionaria!"})
    })

    app.use(
        express.json(),
        carrosRoutes,
        motosRoutes,
        veiculosAll
    )
}

export default routes