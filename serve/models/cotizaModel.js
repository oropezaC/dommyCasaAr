const data = require('../dataDommy/pedidoDommy');

function saveCoti(d) {
  return new Promise((resolve, reject) => {
    data.push(d)
    resolve({status:1})
  });
}

module.exports = {
  saveCoti
};
