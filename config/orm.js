const connection = require('./connection');

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM ??', [table], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }); 
    });
  },
  insertOne: (table, values) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO ?? VALUES ?', [table, values], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  },
  updateOne: (table, set, condition) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE ?? SET ? WHERE ?', [table, set, condition], (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
};

module.exports = orm;