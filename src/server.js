/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import APIs_V1 from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  // Enable req.body from data
  app.use(express.json())

  app.use('/v1', APIs_V1)
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3. Hello ${env.AUTHOR}, I am running at ${env.APP_HOST} and Port:${env.APP_PORT}`)
  })
  exitHook(() => {
    console.log('4. Server is shuting down...')
    CLOSE_DB()
    console.log('5. Disconnected from mongodb cloud atlas')
  })
}
// Write IIFE
(async () => {
  try {
    console.log('1. Connecting to MongoDB Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to Mongodb Atlast')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()