const express = require('express')
const router = express.Router()
const Team = require('../schemas/Team')

router.get('/', async function(req, res, next) {
    const teams = await Team.find({})

    res.json(teams)
})

router.get('/:id', async function(req, res, next) {
    const team = await Team.find({
        teamId: req.params.id
    })

    res.json(team)
})

module.exports = router;