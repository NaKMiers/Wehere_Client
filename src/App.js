import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Cookies from 'js-cookie'
import { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from './actions'
import Backdrop from './commons/Backdrop'
import theme, { themeDefault } from './commons/theme'
import routes from './routes'

function App({ curUser, actionCreators }) {
   useLayoutEffect(() => {
      const user = Cookies.get('user')
      if (user) {
         actionCreators.login(JSON.parse(user))
      }
   }, [actionCreators])

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

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(App)
