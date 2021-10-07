const mongoose = require('mongoose')

module.exports = routeModel

const routeSchema = new Schema({
    routeNumber: {type: Number, required: true}
    routeName: {type: String, required: true}
    stopsList: [{type: Schema.Types.ObjectId, ref: 'Stop'}]
})

const routeModel = mongoose.model('Route', routeSchema)