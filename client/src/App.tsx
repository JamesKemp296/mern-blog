import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { OFF_WHTIE, BLUE, ORANGE } from "./utils"

// Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

// Views
import Home from "./views/Home"
import BlogPost from "./views/BlogPost"
import Dashboard from "./views/Dashboard"
import Login from "./views/Login"

// Componetns
import View from "./components/View"
import Header from "./components/Header"

interface Props {}

const theme = createMuiTheme({
  palette: {
    background: {
      default: OFF_WHTIE,
    },
    primary: {
      main: BLUE,
    },
    secondary: {
      main: ORANGE,
    },
  },
})

const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <View>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blog/:id" component={BlogPost} />
          </Switch>
        </View>
      </Router>
    </ThemeProvider>
  )
}

export default App
