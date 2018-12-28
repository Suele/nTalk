const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const consign = require('consign');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.listen(3000, () => {
    console.log('>>>>> run server.');
});