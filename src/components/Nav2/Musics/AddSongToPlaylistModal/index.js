import { Fade, List, Modal, Paper, Typography } from '@material-ui/core'
import PlaylistListItem from '../PlaylistList/PlaylistListItem'
import useStyles from './styles'

function AddSongToPlayListModal({ open, handleClose }) {
   const styles = useStyles()

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
               <List className={styles.playlistList}>
                  <div onClick={() => console.log('12213321')}>
                     <PlaylistListItem showMoreBtn={false} />
                  </div>
                  <div onClick={() => console.log('12213321')}>
                     <PlaylistListItem showMoreBtn={false} />
                  </div>
                  <div onClick={() => console.log('12213321')}>
                     <PlaylistListItem showMoreBtn={false} />
                  </div>
                  <div onClick={() => console.log('12213321')}>
                     <PlaylistListItem showMoreBtn={false} />
                  </div>
               </List>
            </Paper>
         </Modal>
      </Fade>
   )
}

export default AddSongToPlayListModal
