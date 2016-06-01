'use strict';

const expect = require('chai').expect;
const FakeExpressHttp = require('fake-express-http');

const FooController = require('../../main/controllers/foo');

describe('foo controller', () => {
  const fooService = {
    foo() {
    }
  };

  it('should foo', () => {
    const fakeHttp = new FakeExpressHttp();
    fakeHttp.request.method = 'POST';
    fakeHttp.request.url = '/';
    fakeHttp.request.body = {
      foo: 'bar'
    };

    const fooController = FooController(fooService);
    fooController(fakeHttp.request, fakeHttp.response, fakeHttp.next);

    return fakeHttp.response.onEnd()
      .then(() => {
        expect(fakeHttp.response.statusCode).to.be.equal(200);
      });
  });
});
