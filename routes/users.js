var express = require('express');
var router = express.Router();
const User = require('../schemas/User');
const Team = require('../schemas/Team');
const Project = require('../schemas/Project');
const Area = require('../schemas/Area')
const Queue = require('../schemas/Queue');

router.get('/generate', function(req, res, next) {

  const users = [
    new User({
      userId: 1,
      name: 'Gustavo Margutti',
      login: 'gustavo.margutti@hotmail.com',
      password: '1234',
      type: 'Member',
      teste: 'ok',
      teamId: 1,
      position: 'Fullstack Developer',
      photo: 'https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/598445_292118894241601_781212996_n.jpg?_nc_cat=101&_nc_oc=AQlaCB_JS3QMzzxoae3ua7HYMXekqKlzd4wDn1DRhNKRJU2H6aif7sRTZLrYiaNLt5M&_nc_ht=scontent.fcgh10-1.fna&oh=5a7900a133b925ea16904208fd76b2f5&oe=5DFB3439'
    }),
    new User({
      userId: 2,
      name: 'Felipe Amalfi',
      login: 'felip.amalf@gmail.com',
      password: '1234',
      type: 'Member',
      teamId: 1,
      position: "Mobile Engineer",
      photo: 'https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/16640952_1104706909638558_7931196132545005684_n.jpg?_nc_cat=108&_nc_oc=AQmQwYeBY2S9y8vDHccdrEjExZBedpcoy2n_raJadK13kWWixFRykqCQ77dL0lLXNsE&_nc_ht=scontent.fcgh10-1.fna&oh=47769ece50954b0e96b3f5f2b522f78b&oe=5DFCB2E3'
    }),
    new User({
      userId: 3,
      name: 'Rogerio Labat',
      login: 'rogerio.labat@gmail.com',
      password: '1234',
      type: 'Member',
      teamId: 1,
      position: 'CTO',
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
      userId: 6,
      name: 'Roberto Santos',
      login: 'rsantos@gmail.com',
      password: '1234',
      areaId: 1,
      type: 'Mentor'
    }),
    new User({
      userId: 7,
      name: 'Megumi Secreto',
      login: 'msecreto@gmail.com',
      password: '1234',
      areaId: 1,
      type: 'Mentor'
    }),
    new User({
      userId: 8,
      name: 'Leticia Brandão',
      login: 'lbrandao@gmail.com',
      password: '1234',
      areaId: 2,
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

  const areas = [
    new Area({
      areaId: 1,
      name: 'Negócios',
      description: 'Dúvidas referentes a Negócios',
    }),
    new Area({
      areaId: 2,
      name: 'Programação',
      description: 'Dúvidas referentes a Programação',
    })
  ]

  const queues = [
    new Queue({
      areaId: 1,
      teamId: 1,
    }),
    new Queue({
      areaId: 2,
      teamId: 2,
    }),
  ]

  const obj = {
    users,
    teams,
    mentors,
    projects,
    areas,
    queues,
  }

  Object.keys(obj).map(o => obj[o].map(async (item) => item.save()))

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
  const user = await User.findOne({
    userId: req.params.id
  })
  if(user) {
    const { _doc: obj }  = user
    if(user.type === 'Member') {
      const { teamId } = user
      obj.team = await Team.findOne({ teamId })
    } else {
      const { areaId } = user
      obj.area = await Area.findOne( { areaId })
    }
    res.json(obj)
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' })
  }
})

module.exports = router;
