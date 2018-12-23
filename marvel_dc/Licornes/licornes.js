const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const app = express();
app.use(bodyParser.json());

const countL = 0;
const city = ['Paris', 'Marseille', 'Nice'];
const random = 0;

const apparition = {
  city,
  cityL: city[random],
  countL
};

const options = {
  method: 'POST',
  url: process.env.FOURNISSEUR_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  body: apparition
};

app.post('/licornes', (req, res) => {
  console.log(req.body.start);
  rp(options);

  // Timer des requetes
  setInterval(async () => {
    apparition.countL = 1;
    apparition.cityL =
     city[Math.floor(Math.random() * Math.floor(city.length))];
    await rp(options);
  }, 7000);
  console.log('');
  res.end('hello');
});

app.listen(6001, () => {
  console.log('app listening on port 6001!');
});
