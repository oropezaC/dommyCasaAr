const data = require('../dataDommy/inventarioDommy');

function getAll() {
  return new Promise((resolve, reject) => {
      resolve(data)
  });
}

module.exports = {
  getAll
};
