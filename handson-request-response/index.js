const http = require('http') // assign 'http' package to a variable using require
const server = http.createServer((req, res) => { // Creating and start a server

  /**
   * This demonstrates a way of handling different
   * requests from a client and sending the appropriate
   * response from the server.
   */

  if(req.url === '/about')
    res.end('The about page')
  else if(req.url ==='/contact')
    res.end('The contact page')
  else if(req.url === '/')
    res.end('The Home page')
  else {
    res.writeHead(404)
    res.end('page not found')
  }
})

server.listen(3000)