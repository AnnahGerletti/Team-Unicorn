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

// router.get('/test', (req, res) => {
//   res.render('test', data)
// })

router.post('/battles/', (req, res) => {
  console.log(req.body)
  var id1 = req.body.id1
  var id2 = req.body.id2

  res.redirect(`/battles/${id1}/${id2}`)
})

router.post('/vote', (req, res) => {
  const id = Number(req.body.id)
  const profileId = data.profiles.findIndex((hero) => {
    return hero.id === id
  })
  // console.log(heros)
  data.profiles[profileId].votes += 1


  res.redirect(`/home`)
})

module.exports = router
