const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Pierres')
})
 
app.listen(3001)