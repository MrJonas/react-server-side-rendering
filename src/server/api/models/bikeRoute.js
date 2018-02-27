var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bikeRoute = new Schema({
    url: {type: String},
    body: {type: String},
    published: {type: Boolean},
    distance: {type: Number},
    atractions: {type: Array}
});


module.exports = mongoose.model('routes', bikeRoute);
