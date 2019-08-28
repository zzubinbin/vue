console.log('*****************************')
const mongoose = require('mongoose')
const db = 'mongodb://localhost/local'

exports.connect = () => {
  // 连接数据库
  mongoose.connect(db)

  let maxTimes = 0

  return new Promise((resolve, reject) => {
    console.log('*****************************')
    // 增加数据库监听事件
    mongoose.connection.on('disconnected', () => {
      console.log('*************数据库断开连接*****************')
      if (maxTimes <= 3) {
        maxTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库异常，请查找原因....')
      }
    })
    // 数据库出错
    mongoose.connection.on('error', (err) => {
      console.log('*************数据库出错*****************')
      if (maxTimes <= 3) {
        maxTimes++
        mongoose.connect(db)
      } else {
        reject(err)
        throw new Error('数据库异常，请查找原因....')
      }
    })
    // 连接打开时
    mongoose.connection.on('open', () => {
      console.log('*************open*****************')
      resolve()
    })
  })
}
