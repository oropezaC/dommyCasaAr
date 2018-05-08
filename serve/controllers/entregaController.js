const EntregaModel = require('../models/entregaModel');
const moment = require('moment')

function getDeliv(req, res) {
  return new Promise((resolve, reject) => {
    let fecha = req.body.fecha;
    let f = moment(fecha).format('DD-MM-YYYY')
    EntregaModel.getDeliv(f)
    .then((result)=>{
      res.json(result)
    })
  });
}

module.exports = {
  getDeliv
};
