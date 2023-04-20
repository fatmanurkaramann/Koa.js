const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router=new Router()

router.get("",(ctx)=>{
    ctx.body='Index page'
})
router.get("/about",(ctx)=>{
    ctx.body='<h1>about page</h1>'
})
router.get("/contact",(ctx)=>{
    ctx.body='contact page'
})


// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.body = 'Hello Koa';
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

app.use(router.routes());
app.listen(3000);