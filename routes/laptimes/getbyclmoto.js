'use strict';

var mongojs = require('mongojs'),
	errMessage = require('../errmessage.js'),
	db = mongojs(process.env.DB_URL, ['documents']);


function getByClMoto(req, res) {
	
}


module.exports = getByClMoto;