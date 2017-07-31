const express = require('express');
const app = express(); // creates an instance of an express application
const morgan = require('morgan');

app.use(morgan('combined'))

app.get('/*', function (req, res) {
  res.send('hello, world!')
});

app.listen(3000, function () {
    console.log('...starting server');
})
