const mongoose = require('mongoose')
const {appConfig} = require('../config')
const Schema = mongoose.Schema

const ProductShema = Schema({
    name:String,
    size: Number,
    UnitaryPrice:Number,
    imgUrl:String,
    description: String
}, {
    timestamps:true
})

//guardar la ruta absoluta de las imagenes
ProductShema.methods.setImgUrl = function setImgUrl (filename) {
    const {host,port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

//indicar que es un modelo y en comillas simple como se va a llamar
module.exports = mongoose.model('Products',ProductShema)