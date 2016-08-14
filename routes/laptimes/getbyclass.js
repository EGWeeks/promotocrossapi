'use strict';

var mongojs = require('mongojs'),
	errMessage = require('../errmessage.js'),
	db = mongojs(process.env.DB_URL, ['documents']);


function getByClass(req, res) {
	var trackName = req.params.track.toUpperCase(),
			motoClass = req.params.class;
			errMessage.parameters = req.params;
	if(motoClass === '250' || motoClass === '450'){
		motoClass = parseInt(motoClass);
		db.documents.find({track: trackName, class: motoClass}, function(err, docs) {
				if(err || docs.length === 0){
					errMessage.err = err;
					res.json(errMessage);
				}else{
					res.json(docs);
				}
			});
	}else if(motoClass.toUpperCase() === 'BOTH'){
		db.documents.find({track: trackName}, function(err, docs) {
				if(err || docs.length === 0){
					errMessage.err = err;
					res.json(errMessage);
				}else{
					res.json(docs);
				}
			});
	}else{
		res.json(errMessage);
	}
}


module.exports = getByClass;