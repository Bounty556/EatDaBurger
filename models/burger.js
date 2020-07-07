const orm = require('../config/orm');

const burger = {
  addBurger: function(burgerName) {
    return new Promise(resolve => {
      orm.insertOne('burgers', {burger_name: burgerName}).then(data => {
        resolve(data);
      });
    });
  },
  getBurgers: function() {
    return new Promise(resolve => {
      orm.selectAll('burgers').then(data => {
        resolve(data);
      });
    });
  },
  eatBurger: function(burgerId) {
    return new Promise(resolve => {
      orm.updateOne('burgers', {devoured: true}, {id: burgerId}).then(data => {
        resolve(data);
      });
    });
  }
};

module.exports = burger;