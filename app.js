const express = require('express');
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');

var people = {
        person: [{name: "Bob"},{name:"Sif"},{name:"FSA"}]
//        location: []
//        person: {
//            name: 'sif'
//        },
//        person: {
//            name: 'anuj'
//        }//
    };

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(morgan('combined'))

app.get('/*', function (req, res) {
  //res.send('hello, world!')
    res.render('index.html', {humans: people.person});
});

app.listen(3000, function () {
    console.log('...starting server');
})
