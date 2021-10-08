const express = require('express')
const router = express.Router()

const indexCtrl = require('../controllers/index')
const { listIndexes } = require('../models/trip')

router.get('/', indexCtrl.index)

router.get('/routes', indexCtrl.routeIndex)

router.get('/stops', indexCtrl.stopIndex)

router.get('/trips', indexCtrl.tripIndex)

router.get('/new/step1', indexCtrl.newTrip)

router.post('/new/step1', indexCtrl.stepOne)

router.post('/new/step2', indexCtrl.stepTwo)

router.post('/new/step3', indexCtrl.stepThree)

router.delete('/trips/:id', indexCtrl.deleteOne)

router.get('/trips/update/:id', indexCtrl.updatePage)

router.put('/trips/:id', indexCtrl.updateOne)

module.exports = router