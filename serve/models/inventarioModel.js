const data = require('../dataDommy/inventarioDommy');

function getAll() {
  return new Promise((resolve, reject) => {
      resolve(data)
  });
}

function add(d) {
  return new Promise((resolve, reject) => {
    let id = data.length + 1
    d.id = id;
    data.push(d)
    resolve({status:1})
  });
}

function set(d) {
  return new Promise((resolve, reject) => {
    data.forEach((data)=>{
      if(data.id == d.id ){
        data.producto = d.producto;
        data.descripcion = d.descripcion;
        data.costo = d.costo;
        d.cantidad = d.cantidad;
      }
    })
    resolve({status:1})
  });
}

module.exports = {
  getAll,
  add,
  set
};
