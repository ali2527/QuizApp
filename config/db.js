require("dotenv").config()

const mongoose = require('mongoose');
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("database connected")
}).catch((err) => {
    console.log("Error")
})

module.exports = mongoose;


