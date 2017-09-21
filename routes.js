const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()
const bodyParser = require('body-parser')

const data = require('./data.json')

router.get('/', (req, res) => {
  res.send('Home')
})

router.get('/battles/:id+id', (req, res) => {
  res.send('Battle page')
})