const express = require('express');
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const app = express();

// Use stuff from the public folder
app.use(express.static('public'));

// For json stuff
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Get routes
const routes = require('./controllers/burgers_controller');
app.use(routes);

app.listen(PORT, () => {
  console.log('Hosting on http://localhost:' + PORT);
});