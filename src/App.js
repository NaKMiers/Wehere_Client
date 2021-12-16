import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from './actions'
import apis from './apis'
import Backdrop from './commons/Backdrop'
import theme from './commons/theme'
import routes from './routes'

function App({ curUser, actionCreators }) {
   // refresh login and
   useEffect(() => {
      const getUser = async () => {
         const userId = localStorage.getItem('user')
         if (userId) {
            try {
               const res = await apis.getUser()
               actionCreators.login(res.data)
               actionCreators.seenNotifications(res.data.seenNotifications)
            } catch (err) {
               throw new Error(err)
            }
         }
      }
      getUser()
   }, [actionCreators, curUser?._id])

   // get notifications
   useEffect(() => {
      const getNotifications = async () => {
         if (curUser?.notifications.length > 0) {
            try {
               const res = await apis.getNotifications(curUser.notifications)
               actionCreators.getNotifications(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getNotifications()
   }, [curUser?.notifications, actionCreators])

   return (
      <Router>
         <ThemeProvider theme={theme[Cookies.get('theme') ? JSON.parse(Cookies.get('theme')) : 0]}>
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
