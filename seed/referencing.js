const Stop = require('../models/stop')
const Route = require('../models/route')

require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

async function idGen () {
    let routes = await Route.find({})
    for (let route of routes) {
        for (let stopNum of route.stopIDList) {
            let stop = await Stop.findOne({stopID:stopNum})
            route.stopRefList.push(stop._id)
            await route.save()
        }
    }
    let stops = await Stop.find({})
    for (let stop of stops) {
        for (let routeNum of stop.routeIDList) {
            let route = await Route.findOne({routeID:routeNum})
            stop.routeRefList.push(route._id)
            await stop.save()
        }
    }
    process.exit()
}

idGen()