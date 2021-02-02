const express = require('express')
const app = express()

app.get('/', function (req, res) {
  helloOliwier();
  res.send('Hello World');
})
 
app.listen(3001)

const helloOliwier = () => console.log('HelloOliwier');
function helloFantin() {
    console.log('hello Fantin')
}

helloFantin()
