const express = require('express')
const hbs = require('express-handlebars')
const router = express.Router()

const data = require('./data')

router.get('/home', (req, res) => {
  res.render('home', data)
})

router.get('/battles/:id/:id2', (req, res) => {
  const bothHero = {
    hero1: data.profiles.find((hero1) => hero1.id == req.params.id),
    hero2: data.profiles.find((hero2) => hero2.id == req.params.id2)
  }
  // console.log(bothHero)

  res.render('battle', bothHero)
})

module.exports = router
