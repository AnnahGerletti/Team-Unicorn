const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()

const data = require('./data')

router.get('/home', (req, res) => {
  res.render('home', data)
})

router.get('/battles/:id', (req, res) => {
 const hero1 = data.profiles.find((hero1) => hero1.id == req.params.id)
  res.render('battle', hero1)
})


module.exports = router
