const CotizaModel = require('../models/cotizaModel');
const moment = require('moment');

function saveCotiza(req, res) {
  return new Promise((resolve, reject) => {
    let d = req.body;
    let fecha = moment(req.body.datos.date).toDate()
    let date = moment(fecha).format('DD-MM-YYYY')
    d.datos.date = date;
    d.estatus = 'pendiente';
    console.log(d);
    CotizaModel.saveCoti(d)
    .then((result)=>{
      res.json(result)
    })
  });
}

module.exports = {
  saveCotiza
};
