require('dotenv').config()
//recibe la instancia de app que se encuentra express
const app = require('./app')
const connectDb = require('./db/mongodb')
// destructuracion de un objeto para utilizar el campo appConfig y db
const { appConfig, dbConfig } = require('./config')
const port = process.env.APP_PORT

async function initApp(appConfig, dbConfig) {
    //conexion a la base de datos
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)


