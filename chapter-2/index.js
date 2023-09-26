const express = require('express') // require express module
const path = require('path')

const app = express()
app.use(express.static('public'))

app.listen(3000, () => {
  console.log("App listening on port 3000")
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.json({
    name: 'Greg Lim'
  })
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact.html'))
})