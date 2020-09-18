const express = require("express")
const BlogPost = require("../models/blogPost")
const router = express.Router()

// add Blog Post
router.post("/", async (req, res) => {
  const { title, body, createdAt, description, tags } = req.body
  const newBlogPost = new BlogPost({
    title,
    description,
    body,
    createdAt,
    tags,
  })

  try {
    const savedPost = await newBlogPost.save()
    res.json(savedPost)
  } catch (e) {
    console.error(e)
  }
})

// get all Blog Posts
router.get("/", async (req, res) => {
  const posts = await BlogPost.find()
  res.json(posts)
})

// get one Blog Post
router.get("/:id", async (req, res) => {
  const post = await BlogPost.findById(req.params.id)
  res.json(post)
})

module.exports = router
