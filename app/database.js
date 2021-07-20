const {Client} = require('pg');

let client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;