import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import theme from './commons/theme'
import Header from './components/Header'
import routes from './routes'

function App() {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Switch>{routes}</Switch>
         </ThemeProvider>
      </Router>
   )
}

export default App
