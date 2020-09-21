const mongoose = require("mongoose")

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
})

module.exports = mongoose.model("BlogPost", blogPostSchema)
