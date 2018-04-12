var db = require('./db'); //Adding a reference to db.js

var express = require('express');
var app = express();

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;