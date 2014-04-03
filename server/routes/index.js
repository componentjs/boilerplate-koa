
var app = require('../app');

app.use(function* (next) {
  if (this.request.path !== '/') return yield* next;

  this.response.body = 'This is an example Component/Koa app. Please read more at https://github.com/component/boilerplate-koa!';
});
