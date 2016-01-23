var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var WorksOnPaper = require('mongoose').model('WorksOnPaper');

router.get('/', function(req,res,next){
	WorksOnPaper.find({onWebsite: true}).exec()
		.then(function(worksonpaper){
			res.send(worksonpaper)
		})
		.then(null, function(err){
			next(err);
		})
})