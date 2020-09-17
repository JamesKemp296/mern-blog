import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { LIGHT_BLUE, ORANGE, Route } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"

interface Props {
  title: string
  body: string
  userHandle: string
  createdAt: any
  commentCount: number
  link: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: 250,
    transition: "transform 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      "& $icon": {
        color: ORANGE,
      },
    },
  },
  actionArea: {
    padding: theme.spacing(3),
    "&:hover": {},
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  icon: {
    fontSize: 70,
    color: LIGHT_BLUE,
  },
  actionButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
}))

const BlogCard: React.FC<Props> = ({
  title,
  body,
  createdAt,
  commentCount,
  userHandle,
  link,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="elevation" elevation={2}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={{
          pathname: `${Route.Blog}${link}`,
          state: {
            title,
            body,
            createdAt,
            commentCount,
            userHandle,
          },
        }}
      >
        <CardContent className={classes.cardContent}>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.body}>
            {body.length >= 50 ? body.substring(0, 50) + "..." : body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionButtons}>
        <Button variant="contained" size="small" color="primary">
          EDIT
        </Button>
        <Button variant="contained" size="small" color="secondary">
          DELETE
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogCard
