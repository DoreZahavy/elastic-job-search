import { log } from 'console'
import { Job } from '../models/job.model.js'
import { dbService } from '../services/db.service.js'
import { logger } from '../services/logger.service.js'
import mongodb from 'mongodb'
const { ObjectId } = mongodb

export const searchService = {
  
    queryJobs,
    queryUsers
}



async function queryJobs(queryOptions = {}) {
    const criteria = _buildCriteria() // filterBy
    try {
        const collection = await dbService.getCollection('job')
        return await collection.find(criteria).toArray()
    
    } catch (err) {
        logger.error('cannot find jobs', err)
        throw err
    }
}
async function queryUsers(queryOptions = {}) {
    const criteria = _buildCriteria() // filterBy
    try {
        const collection = await dbService.getCollection('job')
        return await collection.find(criteria).toArray()
    
    } catch (err) {
        logger.error('cannot find jobs', err)
        throw err
    }
}


function _buildCriteria() { // filterBy
    const criteria = {}
    // if (filterBy.txt) {
    //     const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
    //     criteria.$or = [
    //         {
    //             email: txtCriteria
    //         },
    //         {
    //             fullname: txtCriteria
    //         }
    //     ]
    // }
    // if (filterBy.minBalance) {
    //     criteria.score = { $gte: filterBy.minBalance }
    // }
    return criteria
}




