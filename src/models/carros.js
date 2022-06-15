import mongoose from 'mongoose'

const CarroSchema = new mongoose.Schema(
    {

    nome: {type: String, required: true},
    marca: {type: String, required: true},
    ano: {type: Number},
    seguro: {type: Boolean, required: true}
},
{
    versionKey: false
}
)

const carros = mongoose.model('Carro', CarroSchema)

export default carros