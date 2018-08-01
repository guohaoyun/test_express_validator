'use strict';

require('./global_regist');

const path             = require('path');
const cookieParser     = require('cookie-parser');
const bodyParser       = require('body-parser');
const express          = require('express');
const expressValidator = require('express-validator');
const ValidatorConfig  = require('./middlewares/param-validator/config');
const app              = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(expressValidator(ValidatorConfig));

async function test(req, res, next) {
  let schema = {
    name: {in: 'params', isInt: true}
  }
  await paramValidator(schema, req);
  next(JSON.stringify({code: 0}));
}

app.get('/test',handleError(test));

// 异常统一处理中间件
app.use((result, req, res, next) => {
  res.send(JSON.stringify(result));
})

app.listen(3000, function () {
  console.log('start ......');
});
