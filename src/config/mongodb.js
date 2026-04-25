const MONGODB_URI = 'mongodb://dinhtruongdev:zenXS4NVjEpnH4Up@ac-fnjbiy9-shard-00-00.dwhax9w.mongodb.net:27017,ac-fnjbiy9-shard-00-01.dwhax9w.mongodb.net:27017,ac-fnjbiy9-shard-00-02.dwhax9w.mongodb.net:27017/?ssl=true&replicaSet=atlas-wb8ygw-shard-0&authSource=admin&appName=dinhtruongdev'



const DATABASE_NAME = 'trello-dinhtruongdev'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trellDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
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
  trellDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trellDatabaseInstance) throw new Error('Must connect to database first')
  return trellDatabaseInstance
}

