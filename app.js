const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`Running shortURL on http://localhost:${port}`)
})