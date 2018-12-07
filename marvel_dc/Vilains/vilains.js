// Serverless
const rp = require('request-promise');

const count = 0;
const city = ['Paris', 'Marseille', 'Nice'];
const random = 0;

const apparition = {
  city,
  cityV: city[random],
  count
};

// Envoie une requete POST à la place de Postman
const options = {
  method: 'POST',
  url: process.env.TRACKEUR_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  body: apparition
};

// Timer des requetes
const start = () => {
  rp(options);
  setInterval(async () => {
    apparition.count = Math.floor(Math.random() * Math.floor(100));
    apparition.cityV = city[Math.floor(Math.random() * Math.floor(city.length))];
    await rp(options);
  }, 5000);
};

// eslint-disable-next-line require-await
const apparitionHandler = async msg => ({
  status: 200,
  body: JSON.stringify(await start(JSON.parse(msg.body)))
});

module.exports = {
  apparitionHandler
};
