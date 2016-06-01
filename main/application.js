'use strict';

const Express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

module.exports = (logger) => {
  const application = Express();
  application.disable('x-powered-by');
  application.use(bodyParser.json());
  application.use(compression());

  return application;
};
