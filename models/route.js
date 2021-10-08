const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routeSchema = new Schema({
    routeID: {type: String, required: true},
    routeName: {type: String, required: true},
    stopIDList: [{type: String}],
    stopRefList: [{type: Schema.Types.ObjectId, ref: 'Stop'}]
})

const routeModel = mongoose.model('Route', routeSchema)
module.exports = routeModel
