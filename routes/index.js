let express = require('express');
let router = express.Router()


router.use("/categories", require("./categories"))
router.use("/questions", require("./questions"))

module.exports = router