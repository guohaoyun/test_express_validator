global._              = require('lodash');
global.Promise        = require('bluebird');
global.handleError    = require('./middlewares/error-handle');
global.paramValidator = require('./middlewares/param-validator');