const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let htmls = `
        <h1>Koa request post demo</h1>
        <form method="POST" action="/">
            <div>
              <p>userName</p>
              <input type="text" name="userName">
            </div>
            <div>
              <p>age</p>
              <input type="text" name="age">
            </div>
            <div>
              <p>webSite</p>
              <input type="text" name="webSite">
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
        </form>`
    ctx.body = htmls
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let pastData = ctx.request.body
    ctx.body = pastData
  } else {
    // 其他请求显示404画面
    ctx.body = '<h1>404!</h1>'
  }
})

app.listen(3000, () => {
  console.log('server is starting at prot 3000')
})


// koa-bodyparser 中间件
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''
      ctx.req.on('data', (data) => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        resolve(postData)
      })
    } catch (e) {
      reject(e)
    }
  })
}

function parseQuery (queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}
