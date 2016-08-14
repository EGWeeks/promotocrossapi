'use strict';	 

var express = require('express'),
		 router = express.Router(),
 getLapData = require('./laptimes/getlapdata'),
 getByClass = require('./laptimes/getbyclass'),
getByClMoto = require('./laptimes/getbyclmoto');


router.get('/:track', getLapData);
router.get('/:track/:class', getByClass);
router.get('/:track/:class/:moto', getByClMoto);


module.exports = router;