const express = require ('express')
const router = express.Router()
// const data = require ('./data.json')

router.get('/home', (req, res) => {
  res.send('home paged')
})

router.get('/test', (req, res) => {
  res.render('test', {profiles: ['Harrison', 'Annah', 'Joe']})
})

module.exports = router
