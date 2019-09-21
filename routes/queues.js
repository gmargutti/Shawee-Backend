const express = require('express')
const router = express.Router()
const Queue = require('../schemas/Queue')

router.get('/:areaId', async function(req, res, next) {
    const { areaId } = req.params
    const items = await Queue.find({
        areaId
    })
    res.json({
        count: items ? items.length : 0,
        queue: items
    })
})

module.exports = router;