const mongoose = require('mongoose')
/* const MongoClient = require("mongodb").MongoClient; */
//validar la conexion
mongoose.connection.on('open', () => console.log('db conected'))

//conexion a la base de datos
async function connectDb ({host,port,dbName}){
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri,{useNewUrlParser:true})
}

/* async function connectDb (uri){
    const atlas = uri
    await MongoClient.connect(atlas, {useUnifiedTopology: true }, (err, client) => {
        if (err) console.log("Error occurred connecting to MongoDB...");
        console.log("Connected to MongoDB!");
      });
} */

module.exports = connectDb