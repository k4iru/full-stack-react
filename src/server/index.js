const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static('dist'))

app.listen(process.env.PORT || 8000, () => {
    console.log(`listening on port ${process.env.PORT || 8000}`)
});
