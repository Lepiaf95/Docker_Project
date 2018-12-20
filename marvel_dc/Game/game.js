// Serverless
const rp = require('request-promise');

const first = {
  start: 'Winter is comming'
};

const options = {
  method: 'POST',
  url: process.env.VILAINS_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  body: first
};

// Timer des requetes
const begin = () => {
  rp(options);
};

// eslint-disable-next-line require-await
const start = async msg => ({
  status: 200,
  body: JSON.stringify(await begin(JSON.parse(msg.body)))
});

module.exports = {
  start
};
