const express = require('express') 
const routes = require('./routes/index.js') 
const db  = require('./config/db.js') 
const cors = require('cors')
require('dotenv').config({path: '.env'})

// conexion db
try {    
    db.authenticate()
    console.log('conexión correcta a la base de datos')

} catch (error) {
   console.log(error) 
}

// servidor
const app  = express()

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
    
});

// rutas del server
app.use('/', routes())

const whiteList = [process.env.FRONTEND_URL]

const CorsOptions = {
    origin: (origin, callback) => {
        // revisar si la peticion viene de un servidor que esta en la lista blanca
        const existe = whiteList.some( dominio => dominio === origin)
        if(existe){
            callback(null, true)
        }
        else{
            callback(new Error('No permitido'))
        }
    }
}

// habilitar cors
app.use(cors( CorsOptions ))
// app.use(cors(  ))

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 5000

// puerto
app.listen(port, host, () => {
    console.log('EL servidor funciona')
})

 






    




 