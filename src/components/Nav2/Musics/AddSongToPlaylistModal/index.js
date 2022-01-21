import { Fade, List, Modal, Paper, Typography } from '@material-ui/core'
import PlaylistListItem from '../PlaylistList/PlaylistListItem'
import useStyles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'

function AddSongToPlayListModal({ open, handleClose, playlistList }) {
   const styles = useStyles()

   const renderPlaylists = () =>
      playlistList.map(p => <PlaylistListItem key={p._id} playlist={p} showMoreBtn={false} />)

   return (
      <Fade in={open}>
         <Modal
            open
            onClose={() => handleClose(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paper}>
               <Typography variant='h5' className={styles.heading}>
                  Add To Playlist
               </Typography>
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

export default connect(mapState, mapDispatch)(AddSongToPlayListModal)
