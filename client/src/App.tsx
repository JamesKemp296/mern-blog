import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { OFF_WHTIE, BLUE, ORANGE, GameLink } from "./utils"

// Material UI
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

// Views
import Home from "./views/Home"

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
          </Switch>
        </View>
      </Router>
    </ThemeProvider>
  )
}

export default App
