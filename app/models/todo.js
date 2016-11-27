var mongoose = require('mongoose');

//  we will load this model into the routes folder
module.exports = mongoose.model('Todo', {
    text: String,
    done: Boolean
});