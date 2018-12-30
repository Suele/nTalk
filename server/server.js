const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const routerIndex = require('./router/index');
const routerTask = require('./router/task');

app.use('/', routerIndex);
app.use('/task', routerTask);


app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(3001, () => {
  console.log('>>>>> run server.');
});

module.exports = app;