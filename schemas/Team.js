const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    teamId: Number,
    name: String,
    status: String,
    projectId: Number,
})

module.exports = mongoose.model('Team', schema)