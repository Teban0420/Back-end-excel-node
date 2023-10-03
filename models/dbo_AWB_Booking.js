
const db = require('../config/db.js')
const {DataTypes} = require('sequelize')

 const dbo_AWB_Booking = db.define('AWB_Booking',{
    
    // atributos
    AWB_Prefix: DataTypes.STRING,
    AWB: DataTypes.STRING,
    AWB_ID: DataTypes.BIGINT,
    Origin: DataTypes.STRING,
    Destination: DataTypes.STRING,
    AgentCode: DataTypes.STRING,
    AgentAcct: DataTypes.STRING,
    Agent: DataTypes.STRING,
    ShipperCode: DataTypes.STRING,
    ShipperAcct: DataTypes.STRING,
    Shipper: DataTypes.STRING,
    CneCode: DataTypes.STRING,
    CneName: DataTypes.STRING,
    AWBDate: DataTypes.DATE,
    ExpFltDate: DataTypes.DATEONLY,
    FlightNo: DataTypes.STRING,
    CountPcs: DataTypes.INTEGER,
    GrossWt: DataTypes.NUMBER,
    ChargeWt: DataTypes.NUMBER,
    VolWt: DataTypes.NUMBER,
    Vol: DataTypes.NUMBER,
    UOM: DataTypes.STRING,
    UOV: DataTypes.STRING,
    PayMode: DataTypes.STRING,
    ProductType: DataTypes.STRING,
    CommodityCode: DataTypes.STRING,
    SCC: DataTypes.STRING,
    CommodityDesc: DataTypes.STRING,
    NatureOfGoods: DataTypes.STRING,
    Prescreened: DataTypes.STRING,
    Status: DataTypes.STRING,
    Route: DataTypes.STRING,
    BookFTK: DataTypes.NUMBER,
    MD5: DataTypes.STRING,
    UTC_Modified: DataTypes.DATE,
    UTC_Created: DataTypes.DATE,
    rowguid: DataTypes.INTEGER
}, {
    // nombre de la tabla en singular
    freezeTableName: true,
    modelName: 'singularName',
    
});

dbo_AWB_Booking.removeAttribute('id');

module.exports = dbo_AWB_Booking