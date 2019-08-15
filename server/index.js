const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello koa'
})

app.listen(3000)
console.log('[demo] start at port 3000 use node index.js')

async function testAsync () {
  return 'hello sync' + new Date().getTime()
}

const result = testAsync()
// console.log(result)

function getSomething () {
  return 'someThing' + new Date().getTime()
}

// async function test () {
//   const v1 = await getSomething()
//   const v2 = await testAsync()
//   console.log(v1, v2)
// }

// test()

function takeLongTime () {
  return new Promise(resolve => {
    setTimeout(() => resolve('long time value'), 1000)
  })
}

async function test () {
  const v = await takeLongTime()
  console.log(v)
}

test()
