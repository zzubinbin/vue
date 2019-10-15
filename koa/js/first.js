const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)

let lap = function () {
  let result = ''
  let flat = function (size) {
    for (let i = 0; i <size; i++) {
      result += '_'
    }
  }
  let mout = function (size) {
    result += '/'
    for (let i = 0; i < size; i++) {
      result += "'"
    }
    result += '\\'
  }
  flat(3)
  mout(4)
  flat(6)
  mout(1)
  flat(1)
  return result
}

function aaa() {
  return bbb()
}
function bbb() {
  return aaa()
}
console.log(aaa()+'come')
