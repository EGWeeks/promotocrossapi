'use strict';

var mongojs = require('mongojs'),
	errMessage = require('../errmessage.js'),
	db = mongojs(process.env.DB_URL, ['documents']);


function getLapData(req, res) {
	var trackName = req.params.track.toUpperCase();
	errMessage.parameters = req.params;
	db.documents.find({track: trackName,}, function(err, docs) {
			if(err || docs.length === 0){
				errMessage.err = err;
				res.json(errMessage);
			}else{
				res.json(docs);
			}
		});
}


module.exports = getLapData;