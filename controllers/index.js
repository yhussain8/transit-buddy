const Route = require('../models/route')
const Stop = require('../models/stop')

module.exports = {index, routeIndex, stopIndex, tripIndex, newTrip}

function index(req, res) {
    res.render('index', {title: 'Transit Buddy'})
}

function routeIndex(req, res) {
    res.render('routes', {title: 'Route Index'})
}

function stopIndex(req, res) {
    res.render('stops', {title: 'Stop Index'})
}

function tripIndex(req, res) {
    res.render('trips', {title: 'Trip Index'})
}

function newTrip(req, res) {
    res.render('new', {title: 'New Trip Form'})
}