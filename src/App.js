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
import { makeRandomList } from './commons/utils'

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
               const data = makeRandomList(res.data)
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
               const data = makeRandomList(res.data)
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
               const data = makeRandomList(res.data)
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
               const data = makeRandomList(res.data)
               actionCreators.setShorts(data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getShortsNewfeed()
   }, [actionCreators, curUser?._id])

   // get song list
   useEffect(() => {
      const getMySongList = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getMySongList()
               actionCreators.setMySongList(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getMySongList()
   }, [curUser?._id, actionCreators])

   // get my playlist list
   useEffect(() => {
      const getMyPlaylistList = async () => {
         if (curUser?._id) {
            try {
               const res = await apis.getMyPlaylistList()
               actionCreators.setMyPlaylistList(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getMyPlaylistList()
   }, [curUser?._id, actionCreators])

   // get todolist
   useEffect(() => {
      const getAllTask = async () => {
         try {
            const res = await apis.getAllTask()
            actionCreators.setTodoList(res.data)
         } catch (err) {
            console.log(err)
         }
      }
      getAllTask()
   }, [curUser, actionCreators])

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
