'use strict';

var mongojs = require('mongojs'),
	db = mongojs('mongodb://'+DBUSER+':'+DBPASSWORD+'@ds153815.mlab.com:53815/motocross', ['documents']);

function getLapData(req, res) {
	db.documents.find({ track: req.params.track.toUpperCase()}, function(err, docs) {
		if(err) {
			res.json({ error: "The database doesn't seem to like that and it errored out.", message : err});
		} else if (docs.length === 0) {
			res.json({ error: "Cannot find moto data for that track"});
		} else {
			res.json(docs);
		}
	});
}

module.exports = getLapData;