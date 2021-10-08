const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema({
    tripName: {type: String, required: true},
    description: {type: String},
    stopsTaken: [{type: Schema.Types.ObjectId, ref: 'Stop'}],
    routesTaken: [{type: Schema.Types.ObjectId, ref: 'Route'}]
})

// const stepSchema = new Schema({
//     startStop: {type: Schema.Types.ObjectId, ref: 'Stop'},
//     routeTaken: {type: Schema.Types.ObjectId, ref: 'Route'},
//     endStop: {type: Schema.Types.ObjectId, ref: 'Stop'}
// })

const tripModel = mongoose.model('Trip', tripSchema)
module.exports = tripModel