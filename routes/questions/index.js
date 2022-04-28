let express = require('express')
let router = express.Router()
const {addQuestion, getAllQuestions} = require("../../controllers/question")

router.get("/", getAllQuestions)
router.post("/add",addQuestion)

module.exports = router