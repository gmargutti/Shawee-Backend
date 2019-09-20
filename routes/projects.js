const express = require('express')
const router = express.Router()
const Project = require('../schemas/Project')

router.get('/', async function(req, res, next) {
    const projects = await Project.find({})
    res.json(projects)
})

router.get('/:id', async function(req, res, next) {
    const project = await Project.find({
        projectId: req.params.id
    })
    res.json(project)
})

module.exports = router;