'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {type: String, required: true},
    materials: {type: String},
    dimensions: {type: [Number]},
    year: {type: Number, required: true},
    onWebsite: {type: Boolean, required: true},
    video: {type: String}
});


mongoose.model('Videos', schema);