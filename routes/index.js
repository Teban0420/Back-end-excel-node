const express = require('express')
const router = express.Router()
const vuelosControler = require('../controllers/vuelosControler.js')

module.exports = function(){

   router.get('/vuelos', vuelosControler.mostrarTarifas)

    return router
}