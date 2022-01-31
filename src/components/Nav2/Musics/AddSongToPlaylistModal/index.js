import { Fade, List, Modal, Paper, Typography, Box } from '@material-ui/core'
import PlaylistListItem from '../PlaylistListItem'
import useStyles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import { memo, useState } from 'react'
import apis from '../../../../apis'

function AddSongToPlayListModal({ open, handleCloseModal, playlistList, song }) {
   const [error, setError] = useState('')
   const styles = useStyles()

   const handleAddSongToPlaylist = async playlist => {
      if (!playlist.songs.includes(song._id)) {
         try {
            await apis.addSongToPlaylist(playlist._id, song._id)
            handleCloseModal()
         } catch (err) {
            console.log(err)
         }
         setError('')
      } else {
         setError('This song is available in this Playlist')
      }
   }

   const renderPlaylists = () =>
      playlistList.map(p => (
         <Box key={p._id} onClick={() => handleAddSongToPlaylist(p)}>
            <PlaylistListItem playlist={p} />
         </Box>
      ))

   return (
      <Fade in={open}>
         <Modal
            open
            onClose={handleCloseModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paper}>
               <Typography variant='h5' className={styles.heading}>
                  Add To Playlist
               </Typography>
               <span className={styles.errorMessage}>{error}</span>
               <List className={styles.playlistList}>{renderPlaylists()}</List>
            </Paper>
         </Modal>
      </Fade>
   )
}

const mapState = state => ({
   playlistList: state.music.myPlaylistList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(AddSongToPlayListModal))
