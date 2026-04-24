const express = require('express')
const app = express()

const hostname = 'localhost' 
const port = 8017

app.get('/', function(req, res){
  res.send('<h1>Hello Dinh Truong</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Hello dinhtruongev, I am running server at http://${hostname}:${port}/`)
})