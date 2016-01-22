'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {type: String, required: true},
    materials: {type: String, required: true},
    scale: {
        enum: ['Large', 'Small']
        },
    dimensions: {type: [Number], required: true},
    year: {type: Number, required: true, min: 2004, max:2050},
    sold: {type: Boolean},
    price: {type: Number},
    location: {type: String},
    buyer: {type: String},
    image: {type: String, required: true},
    detail: {type: String},
    onWebsite: {type: Boolean, required: true}
});


mongoose.model('Paintings', schema);