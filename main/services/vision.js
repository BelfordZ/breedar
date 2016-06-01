'use strict';
const vision = require('node-cloud-vision-api');
const petfinder = require('petfinder')('e467045988a0b11d2d9197b8d30d6701', 'c5961341858cd3a90163d6bce316c8f2');
petfinder.getBreedList('dog', (err, dogs) => { console.log(dogs); });

// init with auth
vision.init({auth: 'AIzaSyC9qhfUeNcjV259t6QHRAELY8tsgOgXM5s'});

module.exports = (fooRepository) => {
  return {
    searchByUrl(url) {
      // construct parameters
      const req = new vision.Request({
        image: new vision.Image({
          url
        }),
        features: [
          new vision.Feature('LABEL_DETECTION', 10)
        ]
      });
      return vision.annotate(req);
    }
  };
};
