import carros from '../models/carros.js'
import motos from '../models/motos.js'

class VeiculosAll {

    static todosOsVeiculos = async(req, res) =>{

        try{
            const carro = await carros.find()
            const moto = await motos.find()

            const veiculos = carro.concat(moto)

            res.status(200).json(veiculos)
            
        
        }catch(err) {
            res.status(500).json({err: err})
        }
    }
}

export default VeiculosAll