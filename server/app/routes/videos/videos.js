var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Videos = require('mongoose').model('Videos');

router.get('/', function(req,res,next){
	Videos.find({onWebsite: true}).exec()
		.then(function(videos){
			res.send(videos)
		})
		.then(null, function(err){
			next(err);
		})
})