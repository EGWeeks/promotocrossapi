'use strict';

var express = require('express');
var router = express.Router();

require('dotenv');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/'+process.env.VERIFY, function(req, res) {
	res.render(process.env.VERIFY);
});

module.exports = router;
