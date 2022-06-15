import mongoose from 'mongoose'

const MotoSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        marca: {type: String, required: true},
        ano: {type: Number, required: true},
        seguro: {type: Boolean}
    },
    {
        versionKey: false
    }
) 

const motos = mongoose.model('Moto', MotoSchema)

export default motos