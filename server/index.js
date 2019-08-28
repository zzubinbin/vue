// const http = require('http')
// const express = require('express')
// const fs = require('fs')
//
// fs.readFileSync('a.txt', function (err, data){
//   console.log(err);
//   if (err) return console.error(err)
//   console.log(data.toString());
// })
// // console.log(data.toString());
// console.log('end');
//
//
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'})
//   response.end('hello world\n')
// }).listen(8888)
//
// console.log('sever running 8888')


const events = require('events')
const eventEmitter = new events.EventEmitter()

const connectHandler = function connected() {
  console.log('success')
  eventEmitter.emit('data_received')
}

eventEmitter.on('o')
