import React, { useEffect, useState } from "react"
import axios from "axios"
import { Blog } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

// Components
import WriterBlogCard from "../../components/WriterBlogCard"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    width: "100%",
    display: "grid",
    gridGap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "none",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  pageTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const Dashboard: React.FC<Props> = () => {
  const [blogData, setBlogData] = useState<Blog[] | null>(null)
  const classes = useStyles()

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/mern-stack-blog-wyn/europe-west1/api/blogs`,
      )
      console.log(data)
      setBlogData(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const renderBlogs = (): any => {
    if (!blogData) {
      return <h1>There are no blogs.</h1>
    }
    return (
      <>
        {blogData.map((blog: Blog) => (
          <WriterBlogCard
            key={blog.blogId}
            title={blog.title}
            body={blog.body}
            userHandle={blog.userHandle}
            createdAt={blog.createdAt}
            commentCount={blog.commentCount}
            link={blog.blogId}
          />
        ))}
      </>
    )
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h2" className={classes.pageTitle}>
          <b>Your Blogs</b>
        </Typography>
        <Box className={classes.cardContainer}>{renderBlogs()}</Box>
      </Container>
    </Box>
  )
}

export default Dashboard
