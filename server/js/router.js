const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
// const router = new Router({
//   prefix: '/bin'
// })

let home = new Router()
home.get('/bin', async (ctx) => {
  ctx.body = 'home bin'
}).get('/todo', async (ctx) => {
  ctx.body = 'todo bin'
})

let page = new Router()
page.get('/bin', async (ctx) => {
  ctx.body = 'page bin'
}).get('/todo', async (ctx) => {
  ctx.body = 'page bin'
})

// 装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

/*
router.get('/', (ctx, next) => {
  ctx.body = 'hello word'
})
  .get('/todo', (ctx, next) => {
    ctx.body = 'todo'
  })
app.use(router.routes())
  .use(router.allowedMethods())
*/

app.listen(3000, () => {
  console.log('starting at port 3000')
})
