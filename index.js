const express = require('express') 
const routes = require('./routes/index.js') 
const db  = require('./config/db.js') 

// conexion db
try {    
    db.authenticate()
    console.log('conexión correcta a la base de datos')

} catch (error) {
   console.log(error) 
}

// servidor
const app  = express()

// rutas del server
app.use('/', routes())


// puerto
app.listen(5000)

 






    




 