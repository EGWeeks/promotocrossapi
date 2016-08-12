'use strict';

var mongojs = require('mongojs'),
	db = mongojs('motocross', ['documents']);

function getAllForTrack(req, res) {
	db.documents.find({ track: req.params.track.toUpperCase()}, function(err, docs) {
		if(err) {
			res.json({ error: "The database is clapped out."});
		}
		res.json(docs);
	});
}

module.exports = getAllForTrack;