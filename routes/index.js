const express = require('express')
const router = express.Router()
const vuelosControler = require('../controllers/vuelosControler.js')

module.exports = function(){

   router.get('/vuelos', vuelosControler.mostrarVuelos)
//    router.get('/vuelos/:id', vuelosControler.mostrarVuelo)
   router.get('/excel', vuelosControler.mostrarVuelo)

    return router
}