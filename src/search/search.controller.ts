
import { Request, Response } from "express";
import { logger } from "../services/logger.service.js";
import { searchService } from "./search.service.js";
import { Job } from "../models/job.model.js";




export async function getUsers(req: Request, res: Response){
    try{
        const jobs = await searchService.queryUsers()
        res.send(jobs)
    } catch (err) {
        logger.error('Failed to get jobs', err)
        res.status(400).send({ err: 'Failed to get jobs' })
    }
}

export async function getJobs(req: Request, res: Response) {
    try {
        // const filterBy = {
        //     txt: req.query?.txt || '',
        //     minBalance: +req.query?.minBalance || 0
        // }
        const jobs = await searchService.queryJobs()
        res.send(jobs)
    } catch (err) {
        logger.error('Failed to get jobs', err)
        res.status(400).send({ err: 'Failed to get jobs' })
    }
}

