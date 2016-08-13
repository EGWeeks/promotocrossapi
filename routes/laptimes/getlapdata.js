'use strict';

var mongojs = require('mongojs'),
	db = mongojs(process.env.DB_URL, ['documents']);

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