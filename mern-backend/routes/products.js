const express = require('express')
const upload = require('../libs/storage')
const {addProduct,getProducts,deleteProducts,updateProducts} = require('../controllers/productController')
const api = express.Router()

//endpoint
//segunda parte de la url y upload.single para guardar imagenes
api.post('/products', upload.single('image'),addProduct)
api.get('/products',getProducts)
api.delete('/delete/:id',deleteProducts)
api.post('/update/:id',updateProducts)

module.exports = api