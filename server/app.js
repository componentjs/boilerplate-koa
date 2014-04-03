
var serveStatic = require('koa-static');
var compress = require('koa-compress');
var resolve = require('path').resolve;
var logger = require('koa-logger');
var koa = require('koa');

var app = module.exports = koa();

// resolve the root directly
var root = resolve(__dirname, '..');

// use a real logger in production
// hide the logger during tests because it's annoying
if (app.env !== 'production' && app.env !== 'test') app.use(logger());

app.use(compress());

// always serve the public directory
app.use(serveStatic(resolve(root, 'public')));

// don't serve components in production
if (app.env !== 'production') {
  // only load this dependency when necessary
  var serveComponent = require('component-koa');
  // serve build.js and build.css
  app.use(serveComponent());
  // serve your components' files
  app.use(serveStatic(root));
  // serve your dependencies' files
  app.use(serveStatic(resolve(root, 'components')));
}
