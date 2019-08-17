const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'MyName', 'bin', {
        // cookie所在的域名
        domain: '127.0.0.1',
        // 所在路径
        path: '/index',
        // 有效时长
        maxAge: 1000 * 60 * 60 * 24,
        // 失效时间
        expires: new Date('2019-08-17'),
        // 是否只用于http请求中获取
        httpOnly: false,
        // 是否允许重写
        overwrite: false
      }
    )
    ctx.body = 'cookie is ok'
  } else {
    if (ctx.cookies.get('MyName')) {
      ctx.body = ctx.cookies.get('MyName')
    } else {
      ctx.body = 'cookie is none'
    }
  }
})

app.listen(3000, () => {
  console.log('something is already on 3000 port')
})
