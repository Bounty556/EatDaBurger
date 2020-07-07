const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.getBurgers().then(data => {
    res.render('index', { burgers: data });
  });
});

// Get all burgers
router.get('/api/burgers', (req, res) => {
  burger.getBurgers().then(data => {
    res.json(data);
  });
});

// Add new burger
router.post('/api/burgers', (req, res) => {
  burger.addBurger(req.body.burgerName).then(() => {
    res.end();
  });
});

// Update burger
router.put('/api/burgers/:id', (req, res) => {
  burger.eatBurger(req.params.id).then(() => {
    res.end();
  });
});

module.exports = router;