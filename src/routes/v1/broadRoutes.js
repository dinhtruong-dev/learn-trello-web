import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'GET: API get list broads'
    })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      message: 'POST: APIs create new broad'
    })
  })

export default Router
