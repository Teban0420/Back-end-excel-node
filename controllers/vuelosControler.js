const db = require('../config/db.js')
const dbo_AWB_Booking = require('../models/dbo_AWB_Booking.js')
const dbo_CUS_Rates = require('../models/dbo_CUS_Rates.js')
const headers = require('../models/Headers.js')
const crearExcel = require('../helpers/Excel.js')
const fs = require('fs')


exports.mostrarTarifas = async (req, res, next) => {

    const consultas = []

    consultas.push(db.query(`
        SELECT * FROM [dbo].[vi_ac_WCargoFlights] where STD > '2023-09-30' and STA < '2023-10-15' and Origin = 'SFO'`
    ))
    consultas.push(dbo_CUS_Rates.findAll({where: {CustomerID: 'WCARGO'}}))

    try {

        const [ vuelos, tarifas] = await Promise.all(consultas)
        
        crearExcel(headers, vuelos, tarifas)
                 
        setTimeout(() => {

            res.sendFile('/Excel.xlsx', {root: '.'}, function (err) {
            if (err) 
            {
                next(err);
            } 
            else 
            {
                console.log('enviado',);
            }
            });            
            
        }, 3000);
        
    } catch (error) { 
        console.log(error)
        next()
    }

}
