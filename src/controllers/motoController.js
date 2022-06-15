import motos from '../models/motos.js'

class motoController {

    static AdicionarMoto = async(req, res) => {
        const { nome, marca, ano, seguro } = req.body

        const moto = {
            nome,
            marca,
            ano,
            seguro
        }

        try{
            await motos.create(moto)
            res.status(200).json(moto)
        
        } catch(err) {
            res.status(500).json({err: err})
        }
    }

    static buscarTodasAsMotos = async(req, res) =>{
        
        try{
            const moto = await motos.find()
            if(!moto){
                res.status(400).json({message: "Não motos na concessionaria!"})
                return
            }
            
            res.status(200).json(moto)
        } catch(err) {
            res.status(500).json({err: err})
        }
    }

    static buscarMotoPorID = async(req, res) =>{
        const id = req.params.id

        try{
            const moto = await motos.findOne({_id: id})

            if(!moto){
                res.status(400).json({message: "O id proucura não existe ou estar errado!"})
                return
            }

            res.status(200).json(moto)
        } catch(err){
            res.status(500).json({err: err})
        }
    }

    static atualizarMoto = async(req, res) =>{
        const id = req.params.id

        const { nome, marca, ano, seguro } = req.body
        const moto = {
            nome,
            marca,
            ano,
            seguro
        }
        
        
        try{
            await motos.updateOne({_id: id}, moto)
            if(!moto){
                res.status(422).json({message: "ID não encontrado!"})
            }
            res.status(200).json(moto)
        
        } catch(err) {
            res.status(500).json({erro: err})
        }
    }

    static deletarMoto = async(req, res) =>{
        const id = req.params.id

        try{
            const moto = await motos.findOne({_id: id})
            if(!moto){
                res.status(422).json({message: "ID não encontrado!"})
                return
            }

            await motos.deleteOne(moto)
            res.status(200).json({message: "Moto removida com sucesso!"})
        
        }catch(err){
            res.status(500).json({err: err})
        }
    }



}

export default motoController