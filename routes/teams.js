const express = require('express')
const router = express.Router()
const Team = require('../schemas/Team')
const User = require('../schemas/User')

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

router.get('/members/:teamId', async function (req, res, next) {
    const { teamId } = req.params
    const users = await User.find({
        teamId
    })
    const members = users.map(user => ({
        name: user.name, login: user.login, position: user.position, photo: user.photo
    }))
    res.json({ members })
})

module.exports = router;