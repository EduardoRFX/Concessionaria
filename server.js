import mongoose from 'mongoose'
import app from './src/app.js'

mongoose.connect('mongodb+srv://Veiculos:d7eZZpmkv1yd7rmR@veiculoscuster.1rjei.mongodb.net/Concessionaria?retryWrites=true&w=majority')
.then(()=>{
    console.log("Servidor Conectado!")
    app.listen(3030);
}) .catch((err) =>{
    console.log(err)
})
