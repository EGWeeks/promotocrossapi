'use strict';	 

var express = require('express'),
		 router = express.Router(),
 getLapData = require('./laptimes/getlapdata');

router.get('/:track', getLapData);


module.exports = router;
