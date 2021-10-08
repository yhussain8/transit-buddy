const Route = require('../models/route')
const Stop = require('../models/stop')

module.exports = {index, routeIndex, stopIndex, tripIndex, newTrip}

function index(req, res) {
    res.render('index', {title: 'Transit Buddy'})
}

async function routeIndex(req, res) {
    let routes = await Route.find({}).sort('routeID').populate('stopRefList')
    res.render('routes', {title: 'Route Index', routes})
}

async function stopIndex(req, res) {
    let stops = await Stop.find({}).sort('stopID').populate('routeRefList')
    res.render('stops', {title: 'Stop Index', stops})
}

function tripIndex(req, res) {
    res.render('trips', {title: 'Trip Index'})
}

function newTrip(req, res) {
    res.render('new', {title: 'New Trip Form'})
}