const returnToken = require("../ex2")

const router = require("express").Router()

router.get("/", returnToken)
module.exports = router