let express = require('express');
let router = express.Router()


router.use("/categories", require("./categories"))

module.exports = router