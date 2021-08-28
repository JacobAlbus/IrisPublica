import express from "express"
import textGenerationCtrl from "./textGeneration.controller.js"
const router = express.Router()

router.route("/").get(textGenerationCtrl.apiGenerateLyrics)

export default router