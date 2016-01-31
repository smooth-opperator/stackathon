'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {type: String, required: true},
    key: {type: String},
    materials: {type: String, required: true},
    dimensions: {type: [Number]},
    unit: {
        type: String,
        enum: ['in', 'cm']
    },
    year: {type: Number, required: true, min: 2004, max:2050},
    location: {type: String},
    images: {type: [String], required: true},
    onWebsite: {type: Boolean, required: true}
});


mongoose.model('Installations', schema);
