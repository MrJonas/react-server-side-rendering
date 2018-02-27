var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var images = new Schema({
    _id: {type: String}
});

module.exports = mongoose.model('uploadfs', images);
