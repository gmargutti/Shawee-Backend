const express = require('express')
const router = express.Router()
const Queue = require('../schemas/Queue')
const QueueController = require('../Controllers/QueueController')

router.get('/:areaId', async function(req, res, next) {
    const { areaId } = req.params
    const items = await Queue.find({
        areaId
    }).sort({ queueId: 1 })
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
    const position = await QueueController.getPosition(added.teamId)
    res.json({ added, position })
})

router.delete('/:queueId', async function(req, res, next) {
    const { queueId } = req.params
    const deleted = await Queue.findOneAndDelete({
        queueId
    })
    res.json(deleted)
})

router.get('/position/:teamId', async function(req, res, next) {
    const { teamId } = req.params
    const position = await QueueController.getPosition(teamId)
    res.json(position)
})

module.exports = router;