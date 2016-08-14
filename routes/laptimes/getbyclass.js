'use strict';

var mongojs = require('mongojs'),
	errMessage = require('../errmessage.js'),
	db = mongojs(process.env.DB_URL, ['documents']);


function getByClass(req, res) {
	var findBy = {track:req.params.track.toUpperCase()};
	var motoClass = req.params.class;
	errMessage.parameters = req.params;
	
	if(motoClass === '250' || motoClass === '450') {
		findBy.class = parseInt(motoClass);
	}else if(motoClass.toUpperCase() !== 'BOTH') {
		errMessage.err = "{class} parameter";
		res.json(errMessage);
		return;
	}

	db.documents.find(findBy, function(err, docs) {
			if(err || docs.length === 0){
				errMessage.err = err;
				res.json(errMessage);
			}else{
				res.json(docs);
			}
		});
}


module.exports = getByClass;