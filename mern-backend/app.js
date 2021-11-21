//configurar las rutas de express

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productRoutes = require('./routes/products')
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//cambiar public por la ruta de las imagenes en la aplicacion
app.use('/public', express.static(`${__dirname}/storage/imgs`))

//primera parte de la url
app.use('/v1', productRoutes)

module.exports = app