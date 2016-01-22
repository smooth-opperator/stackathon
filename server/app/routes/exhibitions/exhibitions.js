var router = require('express').Router();
module.exports = router;
var _ = require('lodash');


router.get('/', function(req,res,next){
	Exhibitions.find({onWebsite: true}).exec()
		.then(function(exhibitions){
			res.send(exhibitions)
		})
		.then(null, function(err){
			next(err);
		})
})