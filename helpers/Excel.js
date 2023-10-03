const xl = require('excel4node') 
const wb = new xl.Workbook()


const crearExcel = (headers) => {

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

    wb.write('Excel.xlsx');

}

module.exports = crearExcel