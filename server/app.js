const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.post('/api/users', (ctx, next) => {
  console.log(ctx)
});

app.use(router.routes());

app.listen(6060, () => {

});
