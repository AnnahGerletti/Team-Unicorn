const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()

const data = require('./data')

router.get('/', (req, res) => {
  res.send('Home')
})

router.get('/battles/:id', (req, res) => {
  res.render('battle/', data)
})

router.get('/test', (req, res) => {
  res.render('test', {profiles: ['Harrison', 'Annah', 'Joe']})
})

module.exports = router
