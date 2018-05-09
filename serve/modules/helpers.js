const moment = require('moment');

function months(d) {
  let enero = [];
  let febrero = [];
  let marzo = [];
  let abril = [];
  let mayo = [];
  let junio = [];
  let julio = [];
  let agosto = [];
  let septiembre = [];
  let octubre = [];
  let noviembre = [];
  let diciembre = [];

  let year = {
    'enero':'',
    'febrero':'',
    'marzo':'',
    'abril':'',
    'mayo':'',
    'junio':'',
    'julio':'',
    'agosto':'',
    'septiembre':'',
    'octubre':'',
    'noviembre':'',
    'diciembre':''
  }
  return new Promise((resolve, reject) => {
    d.forEach((item)=>{
      let date = item.datos.date
      item.datos.month = moment(date).add(1, 'M').month();
      item.datos.month == 1 ? enero.push(item) : false;
      item.datos.month == 2 ? febrero.push(item) : false;
      item.datos.month == 3 ? marzo.push(item) : false;
      item.datos.month == 4 ? abril.push(item) : false;
      item.datos.month == 5 ? mayo.push(item) : false;
      item.datos.month == 6 ? junio.push(item) : false;
      item.datos.month == 7 ? julio.push(item) : false;
      item.datos.month == 8 ? agosto.push(item) : false;
      item.datos.month == 9 ? septiembre.push(item) : false;
      item.datos.month == 10 ? octubre.push(item) : false;
      item.datos.month == 11 ? noviembre.push(item) : false;
      item.datos.month == 12 ? diciembre.push(item) : false;
    })
    year.enero = enero.length;
    year.febrero = febrero.length;
    year.marzo = marzo.length;
    year.abril = abril.length;
    year.mayo = mayo.length;
    year.junio = junio.length;
    year.julio = julio.length;
    year.agosto = agosto.length;
    year.septiembre = septiembre.length;
    year.octubre = octubre.length;
    year.noviembre = noviembre.length;
    year.diciembre = diciembre.length;
    resolve(year)
  });
}

function oneDemand(d) {
  let tablon = [];
  let redonda = [];
  let cuadrada = [];
  let brincolin = [];
  let inflableChico = [];
  let inflableGrande = [];
  let carpa = [];
  let mesero = [];


  let products = {
    'tablon':0,
    'redonda':0,
    'cuadrada':0,
    'brincolin':0,
    'inflableChico':0,
    'inflableGrande':0,
    'carpa':0,
    'meseros':0,
  }
  return new Promise((resolve, reject) => {
    d.forEach((item)=>{
      item.productos.brincolin >= 1 ? brincolin.push(item.productos.brincolin) : false;
      item.productos.inflableChico >= 1 ? inflableChico.push(item.productos.inflableChico) : false;
      item.productos.inflableGrande >= 1 ? inflableGrande.push(item.productos.inflableGrande) : false;
      item.productos.tablon >= 1 ? tablon.push(item.productos.tablon) : false;
      item.productos.redonda >= 1 ? redonda.push(item.productos.redonda) : false;
      item.productos.cristal >= 1 ? cuadrada.push(item.productos.cristal) : false;
      item.productos.meseros >= 1 ? mesero.push(item.productos.meseros) : false;
    })
    let count = 0
    for (var i = 0; i < tablon.length; i++) {
      products.tablon += tablon[i]
    }
    for (var i = 0; i < redonda.length; i++) {
      products.redonda += redonda[i]
    }
    for (var i = 0; i < cuadrada.length; i++) {
      products.cuadrada += cuadrada[i]
    }
    for (var i = 0; i < inflableChico.length; i++) {
      products.inflableChico += inflableChico[i]
    }
    for (var i = 0; i < inflableGrande.length; i++) {
      products.inflableGrande += inflableGrande[i]
    }
    for (var i = 0; i < brincolin.length; i++) {
      products.brincolin += brincolin[i]
    }
    for (var i = 0; i < mesero.length; i++) {
      products.meseros += mesero[i]
    }
    resolve(products)
  });

}

module.exports = {
  months,
  oneDemand
};
