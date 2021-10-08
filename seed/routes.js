// code referenced from https://www.youtube.com/watch?v=V30Rpqi6kYE
// Youtube: "NodeJS / Express / MongoDB - Build a Shopping Cart - #4 Seeding Data" by Academind

const Route = require('../models/route')
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const routes = [
    new Route({
        routeID: "01",
        routeName: "Yonge St",
        stopIDList: ["00", "10", "20", "30", "40"]
    }),
    new Route({
        routeID: "02",
        routeName: "Bayview Ave",
        stopIDList: ["01", "11", "21", "31", "41"]
    }),
    new Route({
        routeID: "03",
        routeName: "Leslie St",
        stopIDList: ["02", "12", "22", "32", "42"]
    }),
    new Route({
        routeID: "04",
        routeName: "Don Mills Rd",
        stopIDList: ["03", "13", "23", "33", "43"]
    }),
    new Route({
        routeID: "05",
        routeName: "Victoria Park Ave",
        stopIDList: ["04", "14", "24", "34", "44"]
    }),
    new Route({
        routeID: "10",
        routeName: "Finch Ave",
        stopIDList: ["00", "01", "02", "03", "04"]
    }),
    new Route({
        routeID: "20",
        routeName: "Sheppard Rd",
        stopIDList: ["10", "11", "12", "13", "14"]
    }),
    new Route({
        routeID: "30",
        routeName: "York Mills Rd",
        stopIDList: ["20", "21", "22", "23", "24"]
    }),
    new Route({
        routeID: "40",
        routeName: "Lawrence Ave",
        stopIDList: ["30", "31", "32", "33", "34"]
    }),
    new Route({
        routeID: "50",
        routeName: "Eglinton St",
        stopIDList: ["40", "41", "42", "43", "44"]
    })
]

let done = 0
for (let i = 0; i < routes.length; i++) {
    routes[i].save(function(err, result) {
        done = done + 1
        if (done === routes.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}