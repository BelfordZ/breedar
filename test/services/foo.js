'use strict';

const expect = require('chai').expect;

const FooService = require('../../main/services/foo');

describe('foo service', () => {
  describe('foo', () => {
    const fooRepository = {
      foo() {
      }
    };

    it('should foo', () => {
      const fooService = FooService(fooRepository);
    });
  });

});
