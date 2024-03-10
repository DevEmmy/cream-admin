const express = require("express");
const route = require("./src/routes/verify-route")
const cors = require("cors")
require("dotenv").config()

const app = express();


const port = 3232
app.use(cors({
    origin: "*"
}))

app.use(express.json())
app.use("/", route )

app.listen(port, ()=> {
    console.log(`Server now running on port ${port}`)
})
