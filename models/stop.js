const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stopSchema = new Schema({
    stopID: {type: String, required: true},
    stopName: {type: String, required: true},
    routeIDList: [{type: String}],
    routeRefList: [{type: Schema.Types.ObjectId, ref: 'Route'}]
})

const stopModel = mongoose.model('Stop', stopSchema)
module.exports = stopModel
