import express from 'express'
import { getJobs,getUsers } from './search.controller.js'

const router = express.Router()

router.get('/user', getUsers)
router.get('/job', getJobs)


export const searchRoutes = router