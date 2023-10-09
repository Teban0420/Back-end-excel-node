const xl = require('excel4node') 
const wb = new xl.Workbook()
const moment = require('moment')


const crearExcel = (headers, datos, tarifas) => {

    const ws = wb.addWorksheet('Vuelos');
    const style = wb.createStyle({
        font: {
          color: '#170909',
          size: 12,
        },
        numberFormat: '#####',
      });
    
      const style2 = wb.createStyle({
        font: {
          color: '#170909',
          size: 12,
        },
        numberFormat: '0.##',
      });

    headers.forEach(header => {

        ws.cell(1, headers.indexOf(header) + 1)
        .string(header)
        .style(style);
        
    });

    const info = datos[0]
    let fila = 2
    let columna = 1

    const TarifasAll = Object.values(tarifas) 

    let tarifasWC = {
      Minimun: '',
      Rate: '',
      RateQ: '',
      Break2: '',
      Rate2: '',
      Break3: '',
      Rate3: '',
      RutaCompletaTarifa: ''
    }
    
    TarifasAll.forEach( tarifa => {

      const Rate = tarifa.RateQ.split('/')
      const Break2 = Rate[0].split(':')
      const Break3 = Rate[1].split(':')

       tarifasWC.Minimun = tarifa.RateMin
       tarifasWC.Rate = tarifa.Rate
       tarifasWC.RateQ = tarifa.RateQ.split('/')
       tarifasWC.Break2 = Break2[0]
       tarifasWC.Rate2 = Break2[1]
       tarifasWC.Break3 = Break3[0]
       tarifasWC.Rate3 = Break3[1]
       tarifasWC.RutaCompletaTarifa = tarifa.RouteID
    
    })

    info.forEach( (item, i) => {

      i += 1
      var string = i.toString()

      const rutaCompletaVuelo = item.Origin.concat(item.Dest)
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
      .string('')
      .style(style);

        columna ++

      ws.cell(fila, columna)
      // .number(item.CargoCapWt)
      .string('')
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
      if(rutaCompletaVuelo == tarifasWC.RutaCompletaTarifa.trim()){

          ws.cell(fila, columna)
          .number(tarifasWC.Minimun)
          .style(style);
          
          columna ++
      }
      else{

          ws.cell(fila, columna)
          .string('')
          .style(style);
          
          columna ++
      }

      
      ws.cell(fila, columna)
      .string('LB')
      .style(style);

       columna ++
       
      ws.cell(fila, columna)
      .number(0)
      .style(style);

      columna ++

      if(rutaCompletaVuelo == tarifasWC.RutaCompletaTarifa.trim()){
        
        // RATE
        ws.cell(fila, columna)
        .number(tarifasWC.Rate)
        .style(style);
  
        columna ++       
        
        // BREAK2
        ws.cell(fila, columna)
        .number(parseInt(tarifasWC.Break2))
        .style(style);
        
        columna ++
        
        //RATE 2
        ws.cell(fila, columna)
        .number(Number(tarifasWC.Rate2))
        .style(style2);
        
        columna ++

        // BREAK3
        ws.cell(fila, columna)
        .number(parseInt(tarifasWC.Break3))
        .style(style);
    
        columna ++
          // RATE3
        ws.cell(fila, columna)
        .number(Number(tarifasWC.Rate3))
        .style(style2);
  
        columna ++
    }
    else {

        ws.cell(fila, columna)
        .string('')
        .style(style);
  
        columna ++       
        
        // BREAK2
        ws.cell(fila, columna)
        .string('')
        .style(style);
        
        columna ++
        
        //RATE 2
        ws.cell(fila, columna)
        .string('')
        .style(style);
        
        columna ++

        // BREAK3
        ws.cell(fila, columna)
        .string('')
        .style(style);
    
        columna ++
          // RATE3
        ws.cell(fila, columna)
        .string('')
        .style(style);
  
        columna ++
    }

/////--------------------
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