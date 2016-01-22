'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    source: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number},
    file: {type: String, required: true},
    onWebsite: {type: Boolean, required: true}
});


mongoose.model('Texts', schema);