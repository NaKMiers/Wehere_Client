import CssBaseline from '@material-ui/core/CssBaseline'
import Backdrop from './commons/Backdrop'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import theme, { themeDefault } from './commons/theme'
import routes from './routes'
import { connect } from 'react-redux'

function App({ curUser }) {
   return (
      <Router>
         <ThemeProvider theme={theme[curUser?.setting?.theme] || themeDefault}>
            <CssBaseline />
            <Switch>{routes}</Switch>
            <Backdrop />
         </ThemeProvider>
      </Router>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState)(App)
