var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Paintings = require('mongoose').model('Paintings');

router.get('/', function(req,res,next){
	Paintings.find({onWebsite: true}).exec()
		.then(function(paintings){
			res.send(paintings)
		})
		.then(null, next)
})