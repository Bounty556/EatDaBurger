const connection = require('./connection');

const burgers = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM burgers', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }); 
    });
  },
  insertOne: (burgerName) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO burgers(burger_name, devoured) VALUES(??, false)', [burgerName], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  },
  updateOne: (burgerId) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE burgers SET burgers.devoured = true WHERE burgers.id = ??', [burgerId], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
};

module.exports = burgers;