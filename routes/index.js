var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../models/models');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Login' });
});

router.post('/', (req, res) => {
  
   res.send("under construction");
});


router.get('/register', function(req, res) {
  res.render('register', { title: 'register' });
});

router.post('/register', (req, res) => {
  var mydata = new users(req.body);
  mydata.save(function(error) {
    console.log("Your mydata has been saved!");
  if (error) {
     console.error(error);
   }
  });
     res.redirect('/registerSuccess');
});

router.get('/registerSuccess', (req, res) => {
res.render('registerSuccess');
});

router.get('*', function(req, res) {
  res.send('Sorry page not found');
});




 

module.exports = router;
