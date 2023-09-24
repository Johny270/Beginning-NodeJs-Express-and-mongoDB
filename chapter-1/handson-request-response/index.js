const http = require('http') // assign 'http' package to a variable using require
const fs=require('fs') // File system module helps interact with file on the server
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req, res) => { // Creating and start a server

  /**
   * This demonstrates a way of handling different
   * requests from a client and sending the appropriate
   * response from the server.
   */

  if(req.url === '/about')
    res.end(aboutPage)
  else if(req.url ==='/contact')
    res.end(contactPage)
  else if(req.url === '/')
    res.end(homePage)
  else {
    res.writeHead(404)
    res.end(notFoundPage)
  }
})

server.listen(3000)