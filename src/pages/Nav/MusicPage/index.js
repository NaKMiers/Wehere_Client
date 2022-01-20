import { Switch, Route } from 'react-router-dom'
import AuthorList from '../../../components/Nav2/Musics/AuthorList'
import Header from '../../../components/Header'
import ListOptionMusicPage from '../../../components/Nav2/Musics/ListOptionMusicPage'
import PlayingBar from '../../../components/Nav2/Musics/PlayingBar'
import PlaylistList from '../../../components/Nav2/Musics/PlaylistList'
import SongList from '../../../components/Nav2/Musics/SongList'
import { useEffect } from 'react'
import apis from '../../../apis'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'

function MusicPage({ curUser, actionCreators }) {
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

   return (
      <>
         <Header />
         <Switch>
            <Route path='/musics' exact={true}>
               <div style={{ maxWidth: 960, padding: '0px 6px', margin: 'auto' }}>
                  <ListOptionMusicPage />
               </div>
            </Route>
            <Route path='/musics/songs' exact={true}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <SongList />
               </div>
            </Route>
            <Route path='/musics/playlists' exact={true}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <PlaylistList />
               </div>
            </Route>
            <Route path='/musics/authors' exact={false}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <AuthorList />
               </div>
            </Route>
         </Switch>
         <PlayingBar />
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(MusicPage)
