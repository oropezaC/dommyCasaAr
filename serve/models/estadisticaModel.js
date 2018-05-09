const data = require('../dataDommy/pedidoDommy')


function getData() {
  return new Promise((resolve, reject) => {
    resolve(data)
  });
}


module.exports = {
  getData
};
