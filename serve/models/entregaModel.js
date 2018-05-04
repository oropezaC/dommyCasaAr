const data = require('../dataDommy/pedidoDommy')

function getDeliv(f) {
  return new Promise((resolve, reject) => {
    let res = data.filter(item => item.datos.date == f)
    let r = res.filter(item=> item.estatus == 'cargado')
    resolve(r)
  });
}

module.exports = {
getDeliv
};
