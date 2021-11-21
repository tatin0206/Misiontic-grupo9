//traemos el modelo
const Product = require('../models/Product')

async function addProduct (req,res) {
    try {
        const {
            name,
            size,
            UnitaryPrice,
            description,
        } = req.body

        const product = Product({
            name,
            size,
            UnitaryPrice,
            description,
        })

        if(req.file){
            const {filename} = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()

        res.status(201).send({productStored})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function getProducts (req,res){
    //lena = retorno a objetos planos // exec = ejecutar y retornar la promesa
    const products = await Product.find().lean().exec()
    res.status(200).send({products})
}

/*  async function  deleteProducts (req,res){
    const products = await Product.
} */

async function deleteProducts (req,res){
    try {
        await Product.deleteOne({_id: req.params.id})
        console.log("Product deleted!");
        res.redirect("http://localhost:8080/v1/products");
    } catch (error) {
        console.log('Error: ', error)   
    }
    
}

module.exports = {
    addProduct,
    getProducts,
    deleteProducts

}