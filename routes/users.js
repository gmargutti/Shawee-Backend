var express = require('express');
var router = express.Router();
const User = require('../schemas/User');
const Team = require('../schemas/Team');
const Project = require('../schemas/Project');

router.get('/generate', function(req, res, next) {

  const users = [
    new User({
      name: 'Gustavo Margutti',
      login: 'gmargutti',
      password: '1234',
      type: 'Member',
      teste: 'ok',
      teamId: 1
    }),
    new User({
      name: 'Felipe Amalfi',
      login: 'famalfi',
      password: '1234',
      type: 'Member',
      teamId: 1
    }),
    new User({
      name: 'Rogerio Labat',
      login: 'rlabat',
      password: '1234',
      type: 'Member',
      teamId: 1
    }),
    new User({
      name: 'Rafael Brunner',
      login: 'rbrunner',
      password: '1234',
      type: 'Member',
      teamId: 2,
    }),
    new User({
      name: 'Eduardo Macedo',
      login: 'emacedo',
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
      login: 'msecreto',
      password: '1234',
      area: 'Yakuza',
      type: 'Mentor'
    }),
    new User({
      name: 'Leticia Brandão',
      login: 'lbrandao',
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

module.exports = router;
