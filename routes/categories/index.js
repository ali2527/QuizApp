let express = require('express')
let router = express.Router()
const {addCategory, getAllCategories} = require("../../controllers/category")
let Categories = require('../../models/category')

router.get("/get_all_categories", getAllCategories)
router.post("/add_category",addCategory)

module.exports = router