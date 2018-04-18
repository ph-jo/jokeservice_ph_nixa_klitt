var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var joke = new Schema({
    setup: String,
    punchline: String
});

joke.methods.printJoke = function(){
    console.log(this.setup + "\n" + this.punchline);
};

module.exports = mongoose.model('joke', joke);
