const express = require('express');
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser')
const socketio = require('socket.io');

var server = app.listen(3000, function () {
    console.log('...started server');
});
var io = socketio.listen(server);


app.engine('html', nunjucks.render);
app.set('view engine', 'html');


nunjucks.configure('views', {
    noCache: true
});
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes(io));
// ...



