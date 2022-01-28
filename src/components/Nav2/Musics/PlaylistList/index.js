import { Button, List, Typography, Box } from '@material-ui/core'
import PlaylistListItem from '../PlaylistListItem'
import useStyles from './styles'
import AddNewPlaylistModal from '../AddNewPlaylistModal'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import { Link, Route, Switch } from 'react-router-dom'
import SongInPlaylist from '../SongInPlaylist'

function PlaylistList({ playlistList }) {
   const [isOpenAddNewPLModal, setOpenAddNewPLModal] = useState(false)

   const handleCloseModal = () => {
      setOpenAddNewPLModal(false)
   }

   const styles = useStyles()

   const renderPlaylists = () =>
      playlistList.map(p => (
         <Link key={p._id} to={`/musics/playlists/${p._id}`} className={styles.link}>
            <PlaylistListItem key={p._id} playlist={p} />
         </Link>
      ))

   return (
      <Switch>
         <Route path='/musics/playlists' exact={true}>
            <List style={{ padding: 16 }}>
               <Button
                  variant='contained'
                  className={styles.newPlaylistBtn}
                  onClick={() => setOpenAddNewPLModal(true)}
               >
                  New Playlist
               </Button>
               {playlistList.length ? (
                  <>
                     <Typography className={styles.playlistCount}>
                        Playlist: {playlistList.length}
                     </Typography>
                     <Box className={styles.playlistListWrap}>{renderPlaylists()}</Box>
                  </>
               ) : (
                  <Box className={styles.noPlaylistWrap}>
                     <Typography className={styles.noPlaylist}>
                        No playlists, please create a new playlists.
                     </Typography>
                  </Box>
               )}
               <AddNewPlaylistModal
                  open={isOpenAddNewPLModal}
                  handleCloseModal={handleCloseModal}
               />
            </List>
         </Route>
         <Route path='/musics/playlists/:playlistId' exact={true}>
            <SongInPlaylist />
         </Route>
      </Switch>
   )
}

const mapState = state => ({
   playlistList: state.music.myPlaylistList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(PlaylistList)
