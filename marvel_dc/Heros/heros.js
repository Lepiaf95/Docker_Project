const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let score = 0;
let cityH = 'Paris';

app.post('/', (req, res) => {
  console.log(req.body.countL + ' licorne => ' + req.body.cityL);
  if (cityH === req.body.cityV) {
    score += req.body.countV;
    if (req.body.countV === 0) {
      console.log('');
    } else {
      console.log('Ok t\'es mort !! J\'ai actuellement ' +
        score + ' victimes à mon compte');
    }
  } else {
    cityH = req.body.cityV;
    score += req.body.countV;
    console.log('Coucou je suis à ' + cityH +
      ' ! Et j\'ai actuellement ' +
      score + ' victimes à mon compte');
  }
  console.log('');
  // Empeche le bug de la disparition de la dernière instruction !
  // Attention potentiel probleme à venir...
  res.end('hello');
});

app.listen(5000, () => {
  console.log('app listening on port 5000!');
});
