import app from "./app.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

// dotenv.config()
// const MongoClient = mongodb.MongoClient

const port = 5000 || 8000

// MongoClient.connect(
//     process.env.REST_REVIEWS_DB_URI,
//   {
//     poolSize: 50,
//     wtimeout: 2500,
//     useNewUrlParse: true }
//   )
//   .catch(err => {
//     console.error(err.stack)
//     process.exit(1)
//   })
//   .then(async client => {
//     await RestaurantsDAO.injectDB(client)
//     await ReviewsDAO.injectDB(client)
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})