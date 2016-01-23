'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {type: String, required: true},
    gallery: {type: String},
    type: {
        type: String,
        enum: ['Solo', 'Group']
    },
    artists: {type: [String]},
    dates: {
        startM: {type: String},
        startD: {type: Number},
        endM: {type: String},
        endD: {type: Number},
        year: {type: Number, required: true},
    },
    location: {
        city: {type: String},
        state: {type: String}
    },
    images: {type: [String]},
    onWebsite: {type: Boolean, required: true},
    text: {type: String}
});


mongoose.model('Exhibitions', schema);