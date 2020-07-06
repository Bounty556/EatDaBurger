const orm = require('../config/orm');

const burger = {
  addBurger: burgerName => {
    return new Promise(resolve => {
      orm.insertOne('burgers', {burger_name: burgerName}).then(data => {
        resolve(data);
      });
    });
  },
  getBurgers: () => {
    return new Promise(resolve => {
      orm.selectAll('burgers').then(data => {
        resolve(data);
      });
    });
  },
  eatBurger: (burgerId) => {
    return new Promise(resolve => {
      orm.updateOne('burgers', {devoured: true}, {id: burgerId}).then(data => {
        resolve(data);
      });
    });
  }
};

module.exports = burger;