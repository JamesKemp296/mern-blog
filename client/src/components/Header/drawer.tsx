import React from "react"
import { Link } from "react-router-dom"
import { Route, title } from "../../utils"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import PersonIcon from "@material-ui/icons/Person"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

interface Props {
  isDrawerOpen: boolean
  onToggleDrawer: any
  currentUser: any
}

const useStyles = makeStyles({
  navList: {
    width: 240,
  },
  title: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
  navLink: {
    fontSize: 18,
    textTransform: "uppercase",
  },
})

const Drawer: React.FC<Props> = ({
  isDrawerOpen,
  onToggleDrawer,
  currentUser,
}) => {
  const classes = useStyles()

  const renderNavListItems = (): React.ReactElement => {
    if (currentUser) {
      return (
        <>
          <ListItem button component={Link} to={Route.Dashboard}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className={classes.navLink} />
          </ListItem>
          <ListItem button onClick={() => console.log("Will log out")}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" className={classes.navLink} />
          </ListItem>
        </>
      )
    }
    return (
      <>
        <ListItem button component={Link} to={Route.Login}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Log In" className={classes.navLink} />
        </ListItem>
        <ListItem button component={Link} to={Route.SignUp}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" className={classes.navLink} />
        </ListItem>
      </>
    )
  }

  return (
    <SwipeableDrawer
      anchor="left"
      open={isDrawerOpen}
      onClose={onToggleDrawer}
      onOpen={onToggleDrawer}
    >
      <div
        role="presentation"
        onClick={onToggleDrawer}
        onKeyDown={onToggleDrawer}
      >
        <List className={classes.navList}>
          <ListItem button component={Link} to={Route.Home}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </ListItem>
          <Divider />
          {renderNavListItems()}
        </List>
      </div>
    </SwipeableDrawer>
  )
}

export default Drawer
