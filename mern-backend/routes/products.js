const express = require('express')
const upload = require('../libs/storage')
const {addProduct,getProducts,deleteProducts} = require('../controllers/productController')
const api = express.Router()
//segunda parte de la url y upload.single para guardar imagenes
api.post('/products', upload.single('image'),addProduct)

//endpoint
api.get('/products',getProducts)
api.delete('/delete/:id',deleteProducts)
module.exports = api