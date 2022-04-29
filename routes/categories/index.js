let express = require('express')
let router = express.Router()
const {addCategory, getAllCategories} = require("../../controllers/category")
let Categories = require('../../models/category')

router.get("/", getAllCategories)
router.post("/add",addCategory)

module.exports = router