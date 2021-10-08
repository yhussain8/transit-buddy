const express = require('express')
const router = express.Router()

const indexCtrl = require('../controllers/index')

router.get('/', indexCtrl.index)

router.get('/routes', indexCtrl.routeIndex)

router.get('/stops', indexCtrl.stopIndex)

router.get('/trips', indexCtrl.tripIndex)

router.get('/new', indexCtrl.newTrip)

module.exports = router