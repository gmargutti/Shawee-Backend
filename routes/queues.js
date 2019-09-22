const express = require('express')
const router = express.Router()
const Queue = require('../schemas/Queue')
const QueueController = require('../Controllers/QueueController')
const Team = require('../schemas/Team')

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
    const queue = await Queue.findOne({ teamId })
    if(queue) {
        res.status(406).json({ message: 'A equipe já está na fila e deve esperar ou cancelar sua requisição de atendimento para prosseguir.' })
        return
    }
    const added = await new Queue({
        areaId,
        teamId,
        reqAt: new Date(),
    }).save()
    const team = await Team.findOne({ teamId })
    team.queued = true
    team.save()
    const position = await QueueController.getPosition(added.teamId)
    res.json({ added, position })
})

router.delete('/:queueId', async function(req, res, next) {
    const { queueId } = req.params
    const deleted = await Queue.findOneAndDelete({
        queueId
    })
    const { teamId } = deleted
    const team = await Team.findOne({ teamId })
    team.queued = false
    team.save()
    res.json(deleted)
})

router.get('/position/:teamId', async function(req, res, next) {
    const { teamId } = req.params
    const position = await QueueController.getPosition(teamId)
    res.json(position)
})

module.exports = router;