'use strict';
var router = require('express').Router();
module.exports = router;


// router.use('/exhibitions', require('./exhibitions/exhibitions.js'));
// router.use('/installations', require('./installations/installations.js'));
// router.use('/videos', require('./videos/videos.js'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
