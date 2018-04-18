var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');



var mongoose = require('mongoose');

var dbcon = mongoose.connect('mongodb://jokes:getrekt@ds247479.mlab.com:47479/ph_db').connection;


