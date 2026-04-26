import express from 'express'
import { StatusCodes } from 'http-status-codes'
import broadRoute from '~/routes/v1/boardRoute'

const Router = express.Router()

/** Check APIs v1 Status */
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs V1 are ready to use.'
  })
})

/** Broad APIs */
Router.use('/boards', broadRoute)

export default Router