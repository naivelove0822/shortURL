const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shortURL')

const db = mongoose.connection 

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('This is test')
})

app.listen(port, () => {
  console.log(`Running shortURL on http://localhost:${port}`)
})