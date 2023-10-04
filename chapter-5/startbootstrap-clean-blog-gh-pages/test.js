const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {UseNewUrlParser: true})

BlogPost.create({
  title: "The Mythbuster's Guide to Saving Money on Energy Bills",
  body: "If you have been here a long time, you might remember when I went on ITV Tonight."
})

BlogPost.find({}, (error, blogpost) => {
  console.log(error, blogpost)
})

BlogPost.find({
  title: "The Mythbuster's Guide to Saving Money on Energy Bills"  // Find al document with this specific title
  // title: /The/ // tO FIND all documents with 'The' in the title
}, (error, blogpost) => {
  console.log(error, blogpost)
})