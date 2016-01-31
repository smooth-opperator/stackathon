'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    key: {type: String},
    order: {type: Number},
    title: {type: String, required: true},
    gallery: {type: String},
    type: {
        type: String,
        enum: ['Solo', 'Group']
    },
    artists: {type: [String]},
    dates: {type: String},
    year: {type: Number, required: true},
    location: {type: String},
    images: {type: [String]},
    onWebsite: {type: Boolean, required: true},
    text: {type: String}
});


mongoose.model('Exhibitions', schema);
