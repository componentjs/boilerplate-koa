
var request = require('supertest');

var server = require('../serve');

describe('App', function () {
  it('should serve build.js', function (done) {
    request(server)
    .get('/build.js')
    .expect('Content-Type', 'application/javascript')
    .expect(200, done);
  })

  it('should serve build.css', function (done) {
    request(server)
    .get('/build.css')
    .expect('Content-Type', 'text/css; charset=utf-8')
    .expect(200, done);
  })

  it('should serve normalize.css', function (done) {
    request(server)
    .get('/necolas/normalize.css/3.0.1/normalize.css')
    .expect('Content-Type', 'text/css; charset=utf-8')
    .expect(200, done);
  })

  it('should serve package.json', function (done) {
    request(server)
    .get('/package.json')
    .expect('Content-Type', 'application/json')
    .expect(200, done);
  })

  it('should serve /', function (done) {
    request(server)
    .get('/')
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .expect(200, done);
  })
})
