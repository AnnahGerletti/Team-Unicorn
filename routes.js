const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()
// const data = require ('./data.json')

// const data = require('./data')

router.get('/', (req, res) => {
  res.send('Home')
})

router.get('/battles/:id+id', (req, res) => {
  res.send('Battle page')
})

router.get('/test', (req, res) => {
  res.render('test', {profiles: ['Harrison', 'Annah', 'Joe']})
})

module.exports = router
