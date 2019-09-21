const mongoose = require('mongoose')

const schema = {
    areaId: Number,
    name: String,
    description: String,
}

module.exports = mongoose.model('Area', schema)