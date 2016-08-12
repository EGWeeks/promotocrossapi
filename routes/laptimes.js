	 var express = require('express'),
				router = express.Router(),
getAllForTrack = require('./laptimes/getAllForTrack');


router.get('/:track', getAllForTrack);


module.exports = router;
