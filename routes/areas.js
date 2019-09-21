const express = require('express')
const router = express.Router()
const Area = require('../schemas/Area')

router.get('/', async function(req, res, next) {
    const areas = await Area.find({})
    res.json(areas)
})

module.exports = router