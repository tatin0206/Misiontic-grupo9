const mongoose = require('mongoose')
//validar la conexion
mongoose.connection.on('open', () => console.log('db conected'))

//conexion a la base de datos
async function connectDb ({host,port,dbName}){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri,{useNewUrlParser:true})
}

module.exports = connectDb