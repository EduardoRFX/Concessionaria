import carros from '../models/carros.js'

class carroController {

    static buscarTodosOsCarros = async(req, res) =>{
        try{
            
            const carro = await carros.find()
            res.status(200).json(carro)
        } catch(err){
            res.status(500).json({message: err})
        }
    }

    static adicionarCarro = async (req, res) => {
        const { nome, marca, ano, seguro } = req.body 

        const carro = {
            nome,
            marca,
            ano,
            seguro
        }
        try{
            if(!nome){
                res.status(400).json({message: "O carro não pode ser adicionado a concessionaria sem o nome"})
                return
            }
            await carros.create(carro)
            res.status(200).json(carro)

        } catch(err){
            res.status(500).json({message: err})
        }

    }

    static buscarCarroPorID = async(req, res) =>{
        const id = req.params.id

        try{
            const carro = await carros.findOne({_id: id})
            
            if(!carro){
                res.status(400).json({message: "ID do carro não encontrado !"})
                return
            }
            
            res.status(200).json(carro)

        } catch(err){
            res.status(500).json({message: err})
        }

    }

    static atualizarCarro = async (req, res) => {
        const id = req.params.id

        const { nome, marca, ano, seguro } = req.body

        const carro = {
            nome,
            marca,
            ano,
            seguro
        }

        try{
            await carros.updateOne({_id: id}, carro)
            if(!carro){
                res.status(400).json({message: "ID do carro não encontrado"})
            }
        
            res.status(301).json(carro)
        } catch(err){
            res.status(500).json({err: err})
        } 
    }

    static deletarCarro = async(req, res) =>{
        const id = req.params.id
        const carro = await carros.findOne({_id: id}) 
        if(!carro){
            res.status(400).json({message: "ID do carro não encontrado"})
            return
        }
        
        try{
            await carros.deleteOne(carro)
            res.status(200).json({message: "Carro removido da concessionaria !"})

        } catch(err) {
            res.status(500).json({err: err})
        }
    }



}

export default carroController

