var server = require("./demo");
server.start();













// const Koa = require('koa')
// const app = new Koa()
//
// app.use(async (ctx) => {
//   let url = ctx.url
//   // 从request中获取GET请求
//   let request = ctx.request
//   let reqQuery = request.query
//   let reqQuerystring = request.querystring
//
//   // 从上下文中直接获取
//   let ctxQuery = ctx.query
//   let ctxQuerystring = ctx.querystring
//   ctx.body = {
//     url,
//     reqQuery,
//     reqQuerystring,
//     ctxQuery,
//     ctxQuerystring
//   }
// })
//
// app.listen(3000, () => {
//   console.log('[demo] start at port 3000 use node index.js')
// })

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

// function promiseClick () {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       var num = Math.ceil(Math.random() * 20)
//       console.log('随机数', num)
//       if (num <= 10) {
//         resolve(num)
//       } else {
//         reject ('数字大于10即将执行失败回调')
//       }
//     }, 2000)
//   })
//   return p
// }
//
// function promiseClicks () {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       var num = Math.ceil(Math.random() * 20)
//       console.log('随机数', num)
//       if (num <= 10) {
//         resolve(num)
//       } else {
//         reject ('数字大于10即将执行失败回调')
//       }
//     }, 2000)
//   })
//   return p
// }
//
// function promiseClickss () {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       var num = Math.ceil(Math.random() * 20)
//       console.log('随机数', num)
//       if (num <= 10) {
//         resolve(num)
//       } else {
//         reject ('数字大于10即将执行失败回调')
//       }
//     }, 2000)
//   })
//   return p
// }
//
// promiseClick().then((data) => {
//   console.log('resolved成功回调')
//   console.log('成功回调接收的值：', data)
//   console.log('hui')
// }).catch((reason, data) => {
//   console.log('catch到rejected失败回调')
//   console.log('catch失败执行回调抛出失败原因:', reason)
// })

// all的用法
// 与then同级的另一个方法，all方法，该方法提供了并行执行异步操作的能力，
// 并且在所有异步操作执行完后并且执行结果都是成功的时候才执行回调

// Promise
//   .all([promiseClick(), promiseClicks(), promiseClickss()])
//   .then(function (results) {
//     console.log(results)
//   })

// race的用法
// all是等所有的异步操作都执行完了再执行then方法，
// 那么race方法就是相反的，谁先执行完成就先执行回调
// test

// function getSomething () {
//   return 'something'
// }
//
// async function testAsync() {
//   return 'hello async'
// }
//
// async function test() {
//   const v1 = await getSomething()
//   const v2 = await testAsync()
//   console.log(v1,v2)
// }
//
// test()

// async function takeLongTime() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("long_time_value1")
//     },1000)
//   })
// }
//
// async function takeLongTimes() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("long_time_value2")
//     },2000)
//   })
// }
//
// async function test() {
//   const v = await takeLongTimes()
//   console.log(v)
//   const vm = await takeLongTime()
//   console.log(vm)
// }
//
// test()
