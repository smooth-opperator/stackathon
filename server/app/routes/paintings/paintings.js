var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.get('/', function(req,res,next){
	Paintings.find({onWebsite: true}).exec()
		.then(function(paintings){
			res.send(paintings)
		})
		.then(null, function(err){
			next(err);
		})
})