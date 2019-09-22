const express = require('express')
const router = express.Router()
const Queue = require('../schemas/Queue')

router.get('/:areaId', async function(req, res, next) {
    const { areaId } = req.params
    const items = await Queue.find({
        areaId
    }).sort([reqAt])
    res.json({
        count: items ? items.length : 0,
        queue: items
    })
})

router.post('/', async function(req, res, next) {
    const { areaId, teamId } = req.body
    const added = await new Queue({
        areaId,
        teamId,
        reqAt: new Date(),
    }).save()
    res.json(added)
})

router.delete('/:queueId', async function(req, res, next) {
    const { queueId } = req.params
    const deleted = await Queue.findOneAndDelete({
        queueId
    })
    return res.json(deleted)
})

module.exports = router;