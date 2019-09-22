const Queue = require('../schemas/Queue')

class QueueController {
    async getPosition(teamId) {
        const queue = await Queue.findOne({ teamId }).sort({ queueId: -1 })
        if(queue) {
            const { queueId } = queue
            const queued = await Queue.find({}).where('queueId').lte(queueId)
            return queued.length
        } else {
            return 0
        }
    }
}

module.exports = new QueueController()