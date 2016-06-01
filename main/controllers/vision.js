'use strict';

const Router = require('express').Router;

module.exports = (visionService) => {
  const router = Router();

  router.post('/', (request, response, next) => {
    const url = request.body.url;
    visionService.searchByUrl(url).then((results) => {
      response.send(200, results);
    });
  });

  return router;
};
