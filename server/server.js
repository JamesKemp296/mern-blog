const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const articleRouter = require("./routes/blogPost")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/blogs", articleRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

console.log("Connecting to mongoDB")
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log(err)
    console.log("MongoDB connection established")
  },
)
