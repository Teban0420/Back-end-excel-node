const {Sequelize, QueryTypes} = require('sequelize');
const dotenv = require('dotenv')
dotenv.config({path: '.env'})

 // CONEXION DB
const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 1433,
    dialect: 'mssql',
    define: {
      timestamps: false
   },
   pool: {
      max: 15,
      min: 0,
      idle: 10000,
      acquire: 10000
    }
});




module.exports = db;