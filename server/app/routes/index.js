'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/paintings', require('./paintings/paintings.js'));
router.use('/exhibitions', require('./exhibitions/exhibitions.js'));
router.use('/installations', require('./installations/installations.js'));
router.use('/videos', require('./videos/videos.js'));
router.use('/worksonpaper', require('./worksonpaper/worksonpaper.js'));
router.use('/texts', require('./texts/texts.js'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
