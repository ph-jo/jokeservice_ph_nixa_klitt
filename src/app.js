var express = require('express');
var app = express();

var morgan = require('morgan');
// var bodyParser = require('body-parser');
// var request = require('request');
var joke = require('./joke');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://jokes:getrekt@ds247479.mlab.com:47479/ph_db');

mongoose.connection.on('error', function(){
    console.log('Connection error to db server')
});
mongoose.connection.once('open', function(){
    console.log("Connection established to db server");

app.use(morgan('dev'));

app.get('/jokes/lul', function(req, res){
    res.send("En mand bruger eftermiddagen på at vaske en bil med sin søn \\n Efter et kvarters tid siger sønnen: \"Far, kan vi ikke bruge en haveslange i stedet?\"");

});
app.listen(8080, function(){
    console.log("Listening on port 8080...");
});



// app.use(express.static(path.join(__dirname, 'public')));
// app.post('/jokes', function (req, res){
//     var joke = new Joke({
//         setup: req.setup,
//         punchline: req.punchline
//     });
//
// });

module.exports = app;