const express = require('express')
const router = express.Router()
const Area = require('../schemas/Area')
const Queue = require('../schemas/Queue')

router.get('/', async function(req, res, next) {
    const areas = await Area.find({})
    const promises = areas.map((area) => new Promise(async (resolve, reject) => {
        const { areaId } = area
        const queues = await Queue.find({ areaId })
        resolve({ ...area._doc, onQueue: queues.length })
    }))
    const teste = await Promise.all(promises)
    res.json(teste)
})

module.exports = router