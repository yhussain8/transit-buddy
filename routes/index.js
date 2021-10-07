const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('index', {title: 'Transit Buddy'})
})

router.get('/new', function(req, res) {
  res.render('new', {title: 'Create New Routes & Stops'})
})

module.exports = router
