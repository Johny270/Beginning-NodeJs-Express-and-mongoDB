const http = require('http') // assign 'http' package to a variable using require
const server = http.createServer((req, res) => { // Creating and start a server
  console.log(req.url)
  res.end('Hello Node.js')
})

server.listen(3000)