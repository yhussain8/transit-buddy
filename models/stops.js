const mongoose = require('mongoose')

module.exports = stopModel

const stopSchema = new Schema({
    stopNumber: {type: String, required: true},
    stopName: {type: Number, required: true},
    routesList: [{type: Schema.Types.ObjectId, ref: 'Route'}]
})

const stopModel = mongoose.model('Stop', stopSchema)