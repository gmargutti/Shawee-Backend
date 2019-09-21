const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const schema = new mongoose.Schema({
    queueId: Number,
    teamId: Number,
    areaId: Number,
    reqAt: Date,
})

schema.plugin(AutoIncrement, { inc_field: 'queueId' })

module.exports = mongoose.model('Queue', schema)