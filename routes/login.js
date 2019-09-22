const express = require('express')
const router = express.Router()
const User = require('../schemas/User')
const Team = require('../schemas/Team')

router.post('/', async function(req, res, next) {
    const { login, password } = req.body
    const user = await User.findOne({
        login
    })
    if(user) {
        if(user.password === password) {
            const { teamId } = user
            const team = await Team.findOne({ teamId })
            res.json({ user: { ...user._doc, team } })
            return;
        }
        res.status(401).json({ message: 'Senha informada está incorreta!' })
        return;
    }
    res.status(401).json({message: 'Usuário não encontrado!'});
})

module.exports = router;