const Route = require('../models/route')
const Stop = require('../models/stop')
const Trip = require('../models/trip')

module.exports = {index, routeIndex, stopIndex, tripIndex, newTrip, stepOne, stepTwo, stepThree, deleteOne, updatePage, updateOne}

function index(req, res) {
    res.render('index', {title: 'Transit Buddy'})
}

async function routeIndex(req, res) {
    const routes = await Route.find({}).sort('routeID').populate('stopRefList')
    res.render('routes', {title: 'Route Index', routes})
}

async function stopIndex(req, res) {
    const stops = await Stop.find({}).sort('stopID').populate('routeRefList')
    res.render('stops', {title: 'Stop Index', stops})
}

async function tripIndex(req, res) {
    const trips = await Trip.find({}).sort('tripName').populate('stopsTaken').populate('routesTaken')
    res.render('trips', {title: 'Trip Index', trips})
}

async function newTrip(req, res) {
    const stops = await Stop.find({}).sort('stopID').populate('routeRefList')
    res.render('new', {title: 'New Trip Form', stops})
}

async function stepOne(req, res) {
    console.log('step1 req.body', req.body)
    //  req.body contains tripName, description, startStop (ObjID str)

    const stopID = req.body.startStop
    const stop = await Stop.findById(stopID).populate('routeRefList')

    const trip = await Trip.create({
        tripName:req.body.tripName, 
        description:req.body.description,
        stopsTaken:[stop._id]
    })

    res.render('new2', {title: 'New Trip Form', stop, trip})
}

async function stepTwo(req, res) {
    console.log('step2 req.body', req.body)
    // req.body contains route (ObjID str), trip (ObjID str)
    const routeID = req.body.route
    const tripID = req.body.trip
    const route = await Route.findById(routeID).populate('stopRefList')
    const trip = await Trip.findById(tripID)
    trip.routesTaken.push(route._id)
    await trip.save()
    res.render('new3', {title: 'New Trip Form', route, trip})
}

async function stepThree(req, res) {
    console.log('step3 req.body', req.body)
    // req.body contains stop (ObjID str), trip (ObjID str) choice, ('stop' or 'transfer')
    const stopID = req.body.stop
    const tripID = req.body.trip
    const stop = await Stop.findById(stopID).populate('routeRefList')
    const trip = await Trip.findById(tripID)
    trip.stopsTaken.push(stop._id)
    await trip.save()
    if (req.body.choice === "stop") {
        res.redirect('/trips')
    } else {
        res.render('new2', {title: 'New Trip Form', stop, trip})
    }
}

async function deleteOne(req, res) {
    const tripID = req.params.id
    await Trip.findByIdAndDelete(tripID)
    const trips = await Trip.find({}).sort('tripName').populate('stopsTaken').populate('routesTaken')
    res.render('trips', {title: 'Trip Index', trips})
}

async function updatePage(req, res) {
    const tripID = req.params.id
    const trip = await Trip.findById(tripID)
    res.render('update', {title: 'Update Trip Details', trip})
}

async function updateOne(req, res) {
    const tripID = req.params.id
    await Trip.findByIdAndUpdate(tripID, req.body)
    const trips = await Trip.find({}).sort('tripName').populate('stopsTaken').populate('routesTaken')
    res.render('trips', {title: 'Trip Index', trips})
}