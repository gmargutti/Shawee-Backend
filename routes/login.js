const express = require('express')
const router = express.Router()
const User = require('../schemas/User')

router.post('/', async function(req, res, next) {
    const { login, password } = req.body
    const user = await User.findOne({
        login
    })
    if(user) {
        if(user.password === password) {
            res.json({ message: 'Credenciais validadas com sucesso!' })
            return;
        }
        res.status(401).json({ message: 'Senha informada está incorreta!' })
        return;
    }
    res.status(401).json({message: 'Usuário não encontrado!'});
})

module.exports = router;