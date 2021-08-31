import app from "./app.js"
// import mongodb from "mongodb"
// import dotenv from "dotenv"

// dotenv.config()
// const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 3000

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
//     app.listen(port, () => {
//       console.log(`listening on port ${port}`)
//     })
//   })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})