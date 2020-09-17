import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Blog } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  blogPostContainer: {
    marginTop: theme.spacing(5),
    height: "100%",
    padding: theme.spacing(3),
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      padding: 0,
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    textAlign: "center",
  },
}))

const BlogPost: React.FC<Props> = () => {
  const classes = useStyles()
  const history = useHistory()
  const { title, body, userHandle }: any = history.location.state
  console.log(history)

  const renderBlogPost = (): React.ReactElement => {
    if (!history.location.state) {
      return (
        <CardContent className={classes.cardContent}>
          <Typography variant="h2" className={classes.title}>
            Please return to home
          </Typography>
          <Typography variant="h4" className={classes.body}>
            no blog post found
          </Typography>
        </CardContent>
      )
    }
    return (
      <CardContent className={classes.cardContent}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h4" className={classes.body}>
          {body.length >= 50 ? body.substring(0, 50) + "..." : body}
        </Typography>
        <Typography variant="body1">Author: {userHandle}</Typography>
      </CardContent>
    )
  }

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Card
          className={classes.blogPostContainer}
          variant="elevation"
          elevation={2}
        >
          {renderBlogPost()}
        </Card>
      </Container>
    </Box>
  )
}

export default BlogPost
