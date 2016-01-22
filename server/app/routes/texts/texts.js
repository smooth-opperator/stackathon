var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.get('/', function(req,res,next){
	Texts.find({onWebsite: true}).exec()
		.then(function(texts){
			res.send(texts)
		})
		.then(null, function(err){
			next(err);
		})
})