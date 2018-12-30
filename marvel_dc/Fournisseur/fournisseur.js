const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const app = express();
app.use(bodyParser.json());

app.post('/licornes', (req, res) => {
  if (req.body.countL === 0) {
    console.log('');
  } else {
    console.log(req.body.monture.licorne.nom + ' apparu à ' + req.body.cityL);
  }
  console.log('');
  // Empeche le bug de la disparition de la dernière instruction !
  // Attention potentiel probleme à venir...

  const options = {method: 'POST', url: process.env.HEROS_URL, headers:
      {'Content-Type': 'application/json'}, json: true, body: req.body
  };

  rp(options);

  res.end('hello');
});

app.listen(6002, () => {
  console.log('app listening on port 6002!');
});
