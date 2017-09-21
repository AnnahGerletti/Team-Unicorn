const express = require ('express')
const router = express.Router()
const data = require ('./data.json')

router.get('/home', (req, res) => {
  res.send('home paged')
})

module.exports = router
