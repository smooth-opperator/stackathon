var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.get('/', function(req,res,next){
	WorksOnPaper.find({onWebsite: true}).exec()
		.then(function(worksonpaper){
			res.send(worksonpaper)
		})
		.then(null, function(err){
			next(err);
		})
})