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
import PlayingBar from './components/Nav2/Musics/PlayingBar'
import routes from './routes'

const shuffle = array => {
   let currentIndex = array.length,
      randomIndex

   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
   }

   return array
}

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

   // get blogs newfeed
   useEffect(() => {
      const getBlogsNewfeed = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getBlogsNewfeed()
               const data = shuffle(res.data)
               actionCreators.setBlogs(data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getBlogsNewfeed()
   }, [actionCreators, curUser?._id])

   // get images newfeed
   useEffect(() => {
      const getImagesNewfeed = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getImagesNewfeed()
               const data = shuffle(res.data)
               actionCreators.setImages(data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getImagesNewfeed()
   }, [actionCreators, curUser?._id])

   // get videos newfeed
   useEffect(() => {
      const getVideosNewfeed = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getVideosNewfeed()
               const data = shuffle(res.data)
               actionCreators.setVideos(data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getVideosNewfeed()
   }, [actionCreators, curUser?._id])

   // get shorts newfeed
   useEffect(() => {
      const getShortsNewfeed = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getShortsNewfeed()
               const data = shuffle(res.data)
               actionCreators.setShorts(data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getShortsNewfeed()
   }, [actionCreators, curUser?._id])

   return (
      <Router>
         <ThemeProvider theme={theme[Cookies.get('theme') ? JSON.parse(Cookies.get('theme')) : 0]}>
            <CssBaseline />
            <Switch>{routes}</Switch>
            <PlayingBar />

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
