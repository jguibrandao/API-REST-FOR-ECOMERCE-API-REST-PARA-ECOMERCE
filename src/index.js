const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const routes = require("./routes")

const app = express()

mongoose.connect("mongodb://localhost:27017/", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}, console.log("Connected to database"))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log("Server running"))