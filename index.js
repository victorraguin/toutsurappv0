require('dotenv').config();
console.log(process.env.PG_URL);
const express = require('express');
const router = require('./app/router');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})