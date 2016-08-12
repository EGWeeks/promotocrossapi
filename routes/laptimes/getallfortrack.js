'use strict';

var mongojs = require('mongojs'),
	db = mongojs('motocross', ['documents']);

function getAllForTrack(req, res) {
	db.documents.find({ track: req.params.track.toUpperCase()}, function(err, docs) {
		if(err) console.error(err);
		res.send(docs);
	});
}
module.exports = getAllForTrack;