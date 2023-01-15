const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

//TODO: require HBS
app.set('view engine','hbs');
hbs.registerPartials(`${__dirname}/views/partials`,(error) => {});
app.use(express.static('public'));

const params = {
  name: 'Angerson Jose Amundaray Rengifo',
  tittle: 'Curso Node' //Road Trip by TEMPLATED
}

app.get('/', (req,res) => {
  res.render('home',params);
});

app.get('/generic', (req,res) => {
  res.render('generic',params);
});

app.get('/elements', (req,res) => {
  res.render('elements',params);
});

//PORTS
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});