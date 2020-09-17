import React, { useCallback } from "react"
import { Link } from "react-router-dom"
import { LIGHT_GREY, Route, title } from "../../utils"

// Material UI
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

// Material UI Icons
import AspectRatioIcon from "@material-ui/icons/AspectRatio"

interface Props {
  currentUser: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  navLink: {
    fontSize: 18,
    textTransform: "uppercase",
    borderRadius: 0,
  },
  icon: {
    fontSize: 22,
    marginRight: theme.spacing(1),
    color: LIGHT_GREY,
  },
  toolbar: {
    maxWidth: 960,
    width: "100%",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
}))

const DesktopHeader: React.FC<Props> = ({ currentUser }) => {
  const classes = useStyles()

  const renderNavActions = useCallback((): React.ReactNode => {
    if (currentUser) {
      return (
        <Box display="flex">
          <Button className={classes.navLink} component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button
            onClick={() => console.log("will log out")}
            className={classes.navLink}
          >
            Log Out
          </Button>
        </Box>
      )
    }
    return (
      <Box display="flex">
        <Button className={classes.navLink} component={Link} to={Route.SignUp}>
          Sign Up
        </Button>
        <Button className={classes.navLink} component={Link} to={Route.Login}>
          Login
        </Button>
      </Box>
    )
  }, [currentUser, classes.navLink])

  return (
    <AppBar position="static" className={classes.root} elevation={2}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Button className={classes.navLink} component={Link} to={Route.Home}>
            <AspectRatioIcon className={classes.icon} />
            {title}
          </Button>
        </Box>
        {renderNavActions()}
      </Toolbar>
    </AppBar>
  )
}

export default DesktopHeader
