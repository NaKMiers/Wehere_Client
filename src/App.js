import CssBaseline from '@material-ui/core/CssBaseline'
import Backdrop from './commons/Backdrop'
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
            <Backdrop />
         </ThemeProvider>
      </Router>
   )
}

export default App
