const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser')

/*
router.get('/stylesheets/style.css', function(req, res) {
    /*
    res.sendFile('/Users/anujkk/Desktop/Fullstack Foundations/Junior Workshops/W2D1/twitter/public/stylesheets/style.css');

    
})
*/

// emit newTweet event when ?

module.exports = function (io) {
    
    router.get('/stylesheets/*', express.static('public'));

    router.get('/users/:name', function (req, res) {
      console.log(req.params.name);
        var name = req.params.name;
        var something = tweetBank.find( {name: name} );
        res.render( 'index', { tweets: something, showForm: true, inUsers: true, userName: name } );
    });

    router.get('/tweets/:id', function (req, res) {
        var id = req.params.id;
        var currTweet = tweetBank.find({id:id});
        console.log(currTweet)
        res.render( 'index', { tweets: currTweet } );
    });

    router.get('/', function (req, res) {
      let tweets = tweetBank.list();
      res.render( 'index', { tweets: tweets, showForm: true } );

    });

    router.post('/tweets', function(req, res) {
        console.log(req.body);
        var id = tweetBank.list.length + 1;
        var name = req.body.name;
        var text = req.body.text;
        tweetBank.add(id, name, text);
        res.redirect('/');
    })

  // ...
  // route definitions, etc.
  // ...
  return router;
};