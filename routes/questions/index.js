let express = require('express')
const req = require('express/lib/request')
let router = express.Router()
const {addQuestion, getAllQuestions,editQuestion,deleteQuestion} = require("../../controllers/question")

router.get("/", getAllQuestions)
router.post("/add",addQuestion)
router.put("/edit/:id",editQuestion)
router.delete("/delete/:id",deleteQuestion)

// router.param("id", (req, res,next) => {
//     questions.findById
//     req.question = question
//     next()
// })

module.exports = router