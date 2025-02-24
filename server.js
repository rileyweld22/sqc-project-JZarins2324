const express = require('express')
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/list', (req, res) => {
  res.render('pages/list')
})

app.get('/health', (req, res) => {
  res.status(200).send('Healthy')
})

app.listen(3000)
