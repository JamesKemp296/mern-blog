const express = require("express")
const Article = require("./../models/article")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("In Articles")
})

module.exports = router
