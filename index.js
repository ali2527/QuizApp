let express = require('express');
let app = express();
require("dotenv").config()
const db = require("./config/db")

db.connection.once('open',()=>{
    console.log("db connected")
}).on('error',()=>{
    console.log("error in db connection")
})

app.use(express.json())

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("listeing on port 5000")
})

app.use("/", require("./routes"))