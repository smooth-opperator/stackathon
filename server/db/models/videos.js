'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {type: String, required: true},
    materials: {type: String, required: true},
    dimensions: {type: [Number], required: true},
    year: {type: Number, required: true},
    onWebsite: {type: Boolean, required: true}
});


mongoose.model('Videos', schema);