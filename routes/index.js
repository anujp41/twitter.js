const express = require('express');
const router = express.Router();
const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

/*
router.get('/stylesheets/style.css', function(req, res) {
    /*
    res.sendFile('/Users/anujkk/Desktop/Fullstack Foundations/Junior Workshops/W2D1/twitter/public/stylesheets/style.css');

    
})
*/
router.get('/stylesheets/*', express.static('public'));

router.get('/users/:name', function (req, res) {
  console.log(req.params.name);
    var name = req.params.name;
    var something = tweetBank.find( {name: name} );
    console.log(something)
    res.render( 'index', { tweets: something } );
});
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );

});



module.exports = router;