const db = require('../config/db.js')
const dbo_AWB_Booking = require('../models/dbo_AWB_Booking.js')
const headers = require('../models/Headers.js')
const crearExcel = require('../helpers/Excel.js')

exports.mostrarVuelos = async (req, res, next) => {

    try {

        const vuelos = await dbo_AWB_Booking.findAll()        
        res.json(vuelos)
        
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.mostrarVuelo = async (req, res, next) => {

    
    try {

        const consulta = await db.query(`
                SELECT * FROM [dbo].[vi_ac_WCargoFlights] where STD > '2023-09-30' and STA < '2023-10-15' and Origin = 'SFO'`
           )
        
        res.json(consulta)
        crearExcel(headers)
        

    } catch (error) {
        console.log(error)
        next()
    }
}