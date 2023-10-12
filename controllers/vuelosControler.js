const db = require('../config/db.js')
const dbo_AWB_Booking = require('../models/dbo_AWB_Booking.js')
const dbo_CUS_Rates = require('../models/dbo_CUS_Rates.js')
const headers = require('../models/Headers.js')
const crearExcel = require('../helpers/Excel.js')

exports.mostrarTarifas = async (req, res, next) => {

    const consultas = []

    consultas.push(db.query(`
        SELECT * FROM [dbo].[vi_ac_WCargoFlights] where STD > '2023-09-30' and STA < '2023-10-15' and Origin = 'SFO'`
    ))
    consultas.push(dbo_CUS_Rates.findAll({where: {CustomerID: 'WCARGO'}}))

    try {

        const [ vuelos, tarifas] = await Promise.all(consultas)
        res.json(tarifas)
        // console.log(tarifas[1])
        // res.json(consultas)
    
        crearExcel(headers, vuelos, tarifas)
        
        
    } catch (error) { 
        console.log(error)
        next()
    }

}

// exports.mostrarVuelo = async (req, res, next) => {

    
//     try {

//         const consulta = await db.query(`
//                 SELECT * FROM [dbo].[vi_ac_WCargoFlights] where STD > '2023-09-30' and STA < '2023-10-15' and Origin = 'SFO'`
//            )
        
//         res.json(consulta)
//         crearExcel(headers, consulta)
        

//     } catch (error) {
//         console.log(error)
//         next()
//     }
// }