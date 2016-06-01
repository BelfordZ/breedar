'use strict';

module.exports = (db) => {
  return {
    foo() {
      return Promise.resolve('foo');
    }
  };
};
