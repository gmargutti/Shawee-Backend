var express = require('express');
var router = express.Router();
const User = require('../schemas/User')

/* GET users listing. */
router.get('/generate', function(req, res, next) {

  const users = [
    new User({
      name: 'Gustavo Margutti',
      login: 'gmargutti',
      password: '1234',
      type: 'Member'
    }),
    new User({
      name: 'Felipe Amalfi',
      login: 'famalfi',
      password: '1234',
      type: 'Member'
    }),
    new User({
      name: 'Rogerio Labat',
      login: 'rlabat',
      password: '1234',
      type: 'Member'
    })
  ]
  res.json(users.map((u) => { u.save(); return u; }))
});

module.exports = router;
