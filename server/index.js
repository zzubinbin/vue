const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello koa'
})

app.listen(3000)
console.log('[demo] start at port 3000 use node index.js')

// let p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('执行完成Promise')
//     resolve()
//   }, 2000)
// })

// function promiseClick () {
//   let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       var num = Math.ceil(Math.random() * 20)
//       // 生成1-10的随机数
//       console.log('随机数生成的值：', num)
//       if (num <= 10) {
//         resolve(num)
//       } else {
//         reject('数字太于10了即将执行失败回调')
//       }
//     }, 2000)
//   })
//   return p
// }
//
// promiseClick().then(
//   function (data) {
//     console.log('resolved成功回调')
//     console.log('成功回调接受的值：', data)
//   },
//   function (reason, data) {
//     console.log('rejected失败回调')
//     console.log('失败执行回调抛出失败原因：', reason)
//   }
// )

function promiseClick () {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      var num = Math.ceil(Math.random() * 20)
      console.log('随机数', num)
      if (num <= 10) {
        resolve(num)
      } else {
        reject('数字大于10即将执行失败回调')
      }
    }, 2000)
  })
  return p
}

promiseClick().then((data) => {
  console.log('resolved成功回调')
  console.log('成功回调接收的值：', data)
  console.log(hui)
}).catch((reason, data) => {
  console.log('catch到rejected失败回调')
  console.log('catch失败执行回调抛出失败原因:', reason)
})
