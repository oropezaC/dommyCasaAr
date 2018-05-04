const data = require('../dataDommy/pedidoDommy')

function getAll(f) {
  return new Promise((resolve, reject) => {
    let res = data.filter(item => item.datos.date == f)
    let r = res.filter(item=> item.estatus == 'pendiente')
    resolve(r)
  });
}

function getOne(token) {
  return new Promise((resolve, reject) => {
    let res = data.filter(item =>item.datos.token == token);
    let d = res[0].productos
    resolve(d);
  });
}

function changeS(token) {
  return new Promise((resolve, reject) => {
    let res = data.filter(item =>item.datos.token == token);
    let d = res[0]
    d.estatus = 'cargado'
    console.log(d);
    resolve({status:1});
  });
}
module.exports = {
  getAll,
  getOne,
  changeS
};
