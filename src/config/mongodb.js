import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let trellDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})
//Connection to Database
export const CONNECT_DB = async () => {
  //Call connection to mongodb atlas with URL created in body the clientInstance
  await mongoClientInstance.connect()
  //If the connection successful, get the database name and paste upside down it in the variable trelloApiDatabaseInstance
  trellDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trellDatabaseInstance) throw new Error('Must connect to database first')
  return trellDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}