
const db = require('../config/db.js')
const {DataTypes} = require('sequelize')

const dbo_CUS_Rates = db.define('CUS_Rates', {

    CustomerID: DataTypes.STRING,
    Customer: DataTypes.STRING,
    RateMin: DataTypes.NUMBER,
    Rate: DataTypes.NUMBER,
    RateQ: DataTypes.STRING,
    RouteID: DataTypes.STRING,
    OriginType: DataTypes.STRING,
    DestType: DataTypes.STRING,
    Origin: DataTypes.STRING,
    Dest: DataTypes.STRING,
    RTCRD_ID: DataTypes.NUMBER,
    ValidFrom: DataTypes.DATE,
    ValidTo: DataTypes.DATE,
    TZone: DataTypes.STRING,
    IsActive: DataTypes.NUMBER


}, {
    freezeTableName: true,
    modelName: 'singularName', 
})

dbo_CUS_Rates.removeAttribute('id')

module.exports = dbo_CUS_Rates