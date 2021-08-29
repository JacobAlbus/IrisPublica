import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
import textGeneration from "./api/textGeneration.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("/api/v1/text-generation", textGeneration)
app.use("*", (req, res) => res.status(404).json({ error: "I like little boys"}))

export default app