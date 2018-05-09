const InvModel = require('../models/inventarioModel')

function getInventario(req, res) {
  return new Promise((resolve, reject) => {
    InvModel.getAll().then((result)=>{
      res.json(result)
    })
  });
}

function addToStock(req,res) {
  return new Promise((resolve, reject) => {
    let d = req.body;
    InvModel.add(d).then((result)=>{
      res.json(result)
    })
  });
}

function setToStock(req,res) {
  return new Promise((resolve, reject) => {
    let d = req.body;
    console.log(d);
    InvModel.set(d).then((result)=>{
      res.json(result)
    })
  });
}

module.exports = {
  getInventario,
  addToStock,
  setToStock
};
