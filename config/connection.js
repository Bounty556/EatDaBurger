const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error: Could not initiate MySQL connection');
    return;
  }
});

module.exports = connection;