// code referenced from https://www.youtube.com/watch?v=V30Rpqi6kYE
// YouTube "NodeJS / Express / MongoDB - Build a Shopping Cart - #4 Seeding Data" by Academind

require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const Stop = require('../models/stop')

const stops = [
    new Stop({
        stopID: "00",
        stopName: "Yonge & Finch",
        routeIDList: ["01", "10"]
    }),
    new Stop({
        stopID: "01",
        stopName: "Bayview & Finch",
        routeIDList: ["02", "10"]
    }),
    new Stop({
        stopID: "02",
        stopName: "Leslie & Finch",
        routeIDList: ["03", "10"]
    }),
    new Stop({
        stopID: "03",
        stopName: "Don Mills & Finch",
        routeIDList: ["04", "10"]
    }),
    new Stop({
        stopID: "04",
        stopName: "Victoria Park & Finch",
        routeIDList: ["05", "10"]
    }),
    new Stop({
        stopID: "10",
        stopName: "Yonge & Sheppard",
        routeIDList: ["01", "20"]
    }),
    new Stop({
        stopID: "11",
        stopName: "Bayview & Sheppard",
        routeIDList: ["02", "20"]
    }),
    new Stop({
        stopID: "12",
        stopName: "Leslie & Sheppard",
        routeIDList: ["03", "20"]
    }),
    new Stop({
        stopID: "13",
        stopName: "Don Mills & Sheppard",
        routeIDList: ["04", "20"]
    }),
    new Stop({
        stopID: "14",
        stopName: "Victoria Park & Sheppard",
        routeIDList: ["05", "20"]
    }),
    new Stop({
        stopID: "20",
        stopName: "Yonge & York Mills",
        routeIDList: ["01", "30"]
    }),
    new Stop({
        stopID: "21",
        stopName: "Bayview & York Mills",
        routeIDList: ["02", "30"]
    }),
    new Stop({
        stopID: "22",
        stopName: "Leslie & York Mills",
        routeIDList: ["03", "30"]
    }),
    new Stop({
        stopID: "23",
        stopName: "Don Mills & York Mills",
        routeIDList: ["04", "30"]
    }),
    new Stop({
        stopID: "24",
        stopName: "Victoria Park & York Mills",
        routeIDList: ["05", "30"]
    }),
    new Stop({
        stopID: "30",
        stopName: "Yonge & Lawrence",
        routeIDList: ["01", "40"]
    }),
    new Stop({
        stopID: "31",
        stopName: "Bayview & Lawrence",
        routeIDList: ["02", "40"]
    }),
    new Stop({
        stopID: "32",
        stopName: "Leslie & Lawrence",
        routeIDList: ["03", "40"]
    }),
    new Stop({
        stopID: "33",
        stopName: "Don Mills & Lawrence",
        routeIDList: ["04", "40"]
    }),
    new Stop({
        stopID: "34",
        stopName: "Victoria Park & Lawrence",
        routeIDList: ["05", "40"]
    }),
    new Stop({
        stopID: "40",
        stopName: "Yonge & Eglinton",
        routeIDList: ["01", "50"]
    }),
    new Stop({
        stopID: "41",
        stopName: "Bayview & Eglinton",
        routeIDList: ["02", "50"]
    }),
    new Stop({
        stopID: "42",
        stopName: "Leslie & Eglinton",
        routeIDList: ["03", "50"]
    }),
    new Stop({
        stopID: "43",
        stopName: "Don Mills & Eglinton",
        routeIDList: ["04", "50"]
    }),
    new Stop({
        stopID: "44",
        stopName: "Victoria Park & Eglinton",
        routeIDList: ["05", "50"]
    })
]

let done = 0
for (let i = 0; i < stops.length; i++) {
    stops[i].save(function(err, result) {
        done = done + 1
        if (done === stops.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}