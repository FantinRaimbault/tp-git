const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

function helloLeandre() {
 console.log('Hello Léandre')
}
helloLeandre()
 
app.listen(3001)