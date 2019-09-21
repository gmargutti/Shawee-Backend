const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    areaId: Number,
    name: String,
    description: String,
})

module.exports = mongoose.model('Area', schema)