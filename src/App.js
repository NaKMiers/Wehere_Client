import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
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

// config firebase
const config = {
   apiKey: 'AIzaSyAgAqJjqEjGogBMuLgcB-Ys92xYsEqmRLA',
   authDomain: 'wehere-7790e.firebaseapp.com',
}
firebase.initializeApp(config)

function App({ curUser, actionCreators }) {
   // refresh login and
   useEffect(() => {
      const getUser = async () => {
         const userId = Cookies.get('userId')
         if (userId) {
            try {
               console.log('getUser')
               const res = await apis.getUser(JSON.parse(userId))
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

   // handle firebase autho changed
   useEffect(() => {
      const unRegisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
         if (!user) {
            console.log('User is not login.')
            return
         }

         // console.log('Logged in user: ', user.displayName)

         const token = await user.getIdToken()
         // console.log('Logged in user token: ', token)
      })

      return () => unRegisterAuthObserver()
   }, [])

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
