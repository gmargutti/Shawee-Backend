var express = require('express');
var router = express.Router();
const User = require('../schemas/User');
const Team = require('../schemas/Team');
const Project = require('../schemas/Project');

router.get('/generate', function(req, res, next) {

  const users = [
    new User({
      userId: 1,
      name: 'Gustavo Margutti',
      login: 'gustavo.margutti@hotmail.com',
      password: '1234',
      type: 'Member',
      teste: 'ok',
      teamId: 1
    }),
    new User({
      userId: 2,
      name: 'Felipe Amalfi',
      login: 'felip.amalf@gmail.com',
      password: '1234',
      type: 'Member',
      teamId: 1
    }),
    new User({
      userId: 3,
      name: 'Rogerio Labat',
      login: 'rogerio@crminformatica.com.br',
      password: '1234',
      type: 'Member',
      teamId: 1
    }),
    new User({
      userId: 4,
      name: 'Rafael Brunner',
      login: 'rbrunner@gmail.com',
      password: '1234',
      type: 'Member',
      teamId: 2,
    }),
    new User({
      userId: 5,
      name: 'Eduardo Macedo',
      login: 'emacedo@gmail.com',
      password: '1234',
      type: 'Member',
      teamId: 2,
    })
  ]

  const teams = [
    new Team({
      teamId: 1,
      name: 'TheQueue',
      status: 'Disponível',
      projectId: 1,
    }),
    new Team({
      teamId: 2,
      name: 'Unidos de Nova Iguaçu',
      status: 'Disponível',
      projectId: 2,
    })
  ]

  const mentors = [
    new User({
      name: 'Roberto Santos',
      login: 'rsantos',
      password: '1234',
      area: 'Negócios',
      type: 'Mentor'
    }),
    new User({
      name: 'Megumi Secreto',
      login: 'msecreto@gmail.com',
      password: '1234',
      area: 'Yakuza',
      type: 'Mentor'
    }),
    new User({
      name: 'Leticia Brandão',
      login: 'lbrandao@gmail.com',
      password: '1234',
      area: 'KS',
      type: 'Mentor'
    })
  ]

  const projects = [
    new Project({
      projectId: 1,
      name: 'StatusQueue',
      description: 'Queue for Hackathons',
    }),
    new Project({
      projectId: 2,
      name: 'RC',
      description: 'Round Craft',
    })
  ]

  const obj = {
    users,
    teams,
    mentors,
    projects,
  }

  Object.keys(obj).map(o => obj[o].map(item => item.save()))

  res.json(obj)
});

router.get('/members', async function(req, res, next) {
  const members = await User.find({
    type: 'Member'
  })
  
  res.json(members)
})

router.get('/mentors', async function (req, res, next) {
  const mentors = await User.find({
    type: 'Mentor'
  })

  res.json(mentors)
})

router.get('/:id', async function(req, res, next) {
  const user = await User.find({
    userId: req.params.id
  })

  res.json(user)
})

module.exports = router;
