import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import theme from './commons/theme'
import routes from './routes'

function App() {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>{routes}</Switch>
         </ThemeProvider>
      </Router>
   )
}

export default App
