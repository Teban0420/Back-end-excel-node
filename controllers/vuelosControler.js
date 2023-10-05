const db = require('../config/db.js')
const dbo_AWB_Booking = require('../models/dbo_AWB_Booking.js')
const dbo_CUS_Rates = require('../models/dbo_CUS_Rates.js')
const headers = require('../models/Headers.js')
const crearExcel = require('../helpers/Excel.js')

exports.mostrarTarifas = async (req, res, next) => {

    try {

        const tarifas = await dbo_CUS_Rates.findAll()        
        res.json(tarifas)
        
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
        crearExcel(headers, consulta)
        

    } catch (error) {
        console.log(error)
        next()
    }
}