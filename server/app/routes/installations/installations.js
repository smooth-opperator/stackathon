var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Installations = require('mongoose').model('Installations');


router.get('/', function(req,res,next){
	Installations.find({onWebsite: true}).exec()
		.then(function(installations){
			res.send(installations)
		})
		.then(null, function(err){
			next(err);
		})
})