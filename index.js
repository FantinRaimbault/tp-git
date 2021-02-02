const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Pierre')
})
 
app.listen(3001)