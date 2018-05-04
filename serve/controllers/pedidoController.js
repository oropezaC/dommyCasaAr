const PedidoModel = require('../models/pedidoModel');
const moment = require('moment')

function getPedidos(req, res) {
  return new Promise((resolve, reject) => {
    let fecha = req.body.fecha;
    let f = moment(fecha).format('DD-MM-YYYY')
    PedidoModel.getAll(f)
    .then((result)=>{
      res.json(result)
    })
  });
}

function getOne(req, res) {
  return new Promise((resolve, reject) => {
    let token = req.params.token;
    PedidoModel.getOne(token)
    .then((result)=>{
      res.json(result)
    })
  });
}

function changeSts(req,res) {
  return new Promise((resolve, reject) => {
    let token = req.params.token;
    PedidoModel.changeS(token)
    .then((result)=>{
      res.json(result)
    })
  });
}
module.exports = {
  getPedidos,
  getOne,
  changeSts
};
