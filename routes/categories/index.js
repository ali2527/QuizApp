let express = require('express')
let router = express.Router()
const {create} = require("../../controllers/category")
let Categories = require('../../models/category')

router.get("/get_all_categories", (req, res)=>{
    Categories.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }
    })
})

router.post("/add_category",create)

module.exports = router