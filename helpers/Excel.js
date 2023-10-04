const xl = require('excel4node') 
const wb = new xl.Workbook()
const moment = require('moment')


const crearExcel = (headers, datos) => {

    const ws = wb.addWorksheet('Vuelos');
    const style = wb.createStyle({
        font: {
          color: '#170909',
          size: 12,
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
      });

    headers.forEach(header => {

        ws.cell(1, headers.indexOf(header) + 1)
        .string(header)
        .style(style);
        
    });

    const info = datos[0]
    let fila = 2
    let columna = 1

    info.forEach( (item, i) => {

      i += 1
      var string = i.toString()
      const staString = item.STA.toString()    
      const STA_moment = moment(item.STA)
      const STA_format = STA_moment.format("DD/MM/YYYY")
      const horaSTA = staString.slice(16,24)

      const STA_COMPLETA = STA_format.concat(' ').concat(horaSTA)

      const stdString = item.STD.toString()  
      const STD_moment = moment(item.STD)
      const STD_format = STD_moment.format("DD/MM/YYYY")
      const horaSTD = stdString.slice(16,24)

      const STD_COMPLETA = STD_format.concat(' ').concat(horaSTD)
      
      ws.cell(fila, columna)
        .string(string)
        .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(item.CarrierID)
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(item.Origin)
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(item.Dest)
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(item.Aircraft)
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(item.FltNr)
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string('LT')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string(STD_COMPLETA)
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string(STA_COMPLETA)
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string('')
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string('')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      // .number(item.UnitsWt)
      .string('null')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      // .number(item.CargoCapWt)
      .string('null')
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string('Standard')
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string('USD')
      .style(style);

        columna ++
        
      // aqui -----------------------
      ws.cell(fila, columna)
      .string('')
      .style(style);

        columna ++
      
      ws.cell(fila, columna)
      .string('')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      columna ++

      ws.cell(fila, columna)
      .string('')
      .style(style);

      fila ++
      columna = 1
    })

    wb.write('Excel.xlsx');
    

}

module.exports = crearExcel