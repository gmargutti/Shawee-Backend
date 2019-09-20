const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: Number,
    name: String,
    login: String,
    password: String,
    type: String,
    status: String,
    teamId: Number,
    area: String
})

module.exports = mongoose.model('User', schema)