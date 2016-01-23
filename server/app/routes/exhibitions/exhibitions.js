var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var Exhibitions = require('mongoose').model('Exhibitions');


router.get('/', function(req,res,next){
	Exhibitions.find({onWebsite: true}).exec()
		.then(function(websiteExhibitions){
			res.send(websiteExhibitions)
		})
		.then(null, next)	
})

router.get('/all', function(req,res,next){
	Exhibitions.find({}).exec()
		.then(function(allExhibitions){
			res.send(allExhibitions)
		})
		.then(null, next)
})

router.post('/', function(req, res, next){
	Exhibitions.create(req.body).exec()
		.then(function(createdExhibition){
			res.status(200).send('Exhibition Added' + createdExhibition)
		})
		.then(null, next)
})

router.put('/:id', function(req, res, next){
	Exhibitions.update({_id: req.params.id}, req.body).exec()
		.then(function(updatedExhibition){
			res.status(200).send('Exhibition Updated' + updatedExhibition)
		})
		.then(null, next)
})

router.delete('/:id', function (req, res, next) {
    Exhibitions.remove({_id: req.params.id})
        .then(function(deletedExhibition){
        	res.status(204).send('Exhibition Deleted' + deletedExhibition)
        })
        .then(null, next);
});
