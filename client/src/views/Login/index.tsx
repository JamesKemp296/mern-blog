import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import { Route } from "../../utils"

// MUI stuff
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pageTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: "relative",
    borderRadius: 0,
    boxShadow: "none",
    fontWeight: "bold",
    color: "white",
  },
  progress: {
    position: "absolute",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    width: "100%",
    position: "absolute",
  },
  links: {
    color: theme.palette.text.primary,
  },
}))

const Login: React.FC<Props> = ({}) => {
  const INITIAL_STATE = {
    email: localStorage.Email ? localStorage.Email : "",
    password: "",
  }
  const classes = useStyles()

  const [formData, setFormData] = useState<any>(INITIAL_STATE)

  const isInvalid = !formData.email || !formData.password

  const handleInputChange = ({ target: { name, value } }: any): void => {
    setFormData({ ...formData, [name]: value })
  }
  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h2" className={classes.pageTitle}>
          <b>Login</b>
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            type="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus={true}
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid}
            disableElevation
            component={Link}
            to={Route.Dashboard}
          >
            Login
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default Login
