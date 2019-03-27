var express = require('express');
var router = express.Router();

var burger = require("../models/burger.js");

router.get('/', function(req, res) {
  burger.all().then(function(data) {
    console.log(data);
    res.render('index', { title: 'Burger Town', burgers: data });
  });
  
});

module.exports = router;
