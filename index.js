const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3001)

function helloFantin() {
    console.log('hello Fantin')
}

helloFantin()