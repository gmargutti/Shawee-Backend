const express = require('express')
const router = express.Router()
const User = require('../schemas/User')
const Team = require('../schemas/Team')
const Area = require('../schemas/Area')

router.post('/', async function(req, res, next) {
    const { login, password } = req.body
    const user = await User.findOne({
        login
    })
    if(user) {
        if(user.password === password) {
            if(user.type === 'Member') {
                const { teamId } = user
                const team = await Team.findOne({ teamId })
                res.json({ user: { ...user._doc, team } })
                return;
            } else {
                const { areaId } = user
                const area = await Area.findOne({ areaId })
                res.json({ user: { ...user._doc, area }})
                return
            }
        }
        res.status(401).json({ message: 'Senha informada está incorreta!' })
        return;
    }
    res.status(401).json({message: 'Usuário não encontrado!'});
})

module.exports = router;