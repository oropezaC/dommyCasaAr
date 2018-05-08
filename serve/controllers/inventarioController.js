const InvModel = require('../models/inventarioModel')

function getInventario(req, res) {
  return new Promise((resolve, reject) => {
    InvModel.getAll().then((result)=>{
      res.json(result)
    })
  });
}

module.exports = {
  getInventario
};
