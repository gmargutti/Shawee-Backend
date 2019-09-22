const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    teamId: Number,
    name: String,
    queued: Boolean,
    projectId: Number,
})

module.exports = mongoose.model('Team', schema)