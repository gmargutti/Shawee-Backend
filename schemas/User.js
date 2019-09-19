const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    type: String
})

module.exports = mongoose.model('User', schema)