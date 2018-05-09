const BiModel = require('../models/estadisticaModel')
const helpers = require('../modules/helpers');


function getBi(req, res) {
  return new Promise((resolve, reject) => {
    BiModel.getData().then((result)=>{
      let data = result
      helpers.months(data).then((result)=>{
        let months = result;
        helpers.oneDemand(data).then((result)=>{
        let products = result
        res.json({months:months,products:products})
        })
      })
    })
  });
}




module.exports = {
  getBi
};
