import express from 'express'
import { StatusCodes } from 'http-status-codes'
import broadRoutes from '~/routes/v1/broadRoutes'

const Router = express.Router()

/** Check APIs v1 Status */
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs V1 are ready to use.'
  })
})

/** Broad APIs */
Router.use('/broads', broadRoutes)

export default Router