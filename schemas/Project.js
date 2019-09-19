const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    projectId: Number,
    name: String,
    description: String,
})

module.exports = mongoose.model('Project', schema)