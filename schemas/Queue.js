const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    teamId: Number,
    areaId: Number,
    reqAt: Date,
})

module.exports = mongoose.model('Queue', schema)