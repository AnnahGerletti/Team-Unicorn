<<<<<<< HEAD
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
=======
const express = require ('express')
const router = express.Router()
const data = require ('./data.json')

router.get('/home', (req, res) => {
  res.send('home paged')
})

module.exports = router
>>>>>>> eba0b4f6f7d6ca0dd887ba57c7234a32205f82c3
