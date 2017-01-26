var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var orm = require('./config/orm.js');