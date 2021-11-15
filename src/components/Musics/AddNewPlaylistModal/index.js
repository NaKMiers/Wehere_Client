import { Button, List, Modal, Paper, TextField, Typography } from '@material-ui/core'
import clsx from 'clsx'
import SongListItem from '../SongListItem'
import useStyle from './styles'

function AddNewPlaylistModal({ open, handleClose }) {
   const styles = useStyle()

   return (
      <Modal
         open={open}
         onClose={() => handleClose(false)}
         aria-labelledby='modal-modal-title'
         aria-describedby='modal-modal-description'
      >
         <Paper className={styles.paper}>
            <Typography variant='h5' className={styles.heading}>
               Add New Playlist
            </Typography>
            <form className={styles.form}>
               <TextField
                  className={styles.textField}
                  id='filled-search'
                  label='Playlist Name'
                  variant='filled'
               />

               <form className={styles.searchForm}>
                  <input
                     placeholder='What you need to search ?'
                     className={styles.searchSongInput}
                  />
                  <Button className={styles.searchBtn}>
                     <i className={clsx(styles.searchIcon, 'fad fa-search')}></i>
                  </Button>
               </form>
               <List className={styles.songList}>
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
                  <SongListItem showActionBtn={false} />
               </List>

               <Button className={styles.submitBtn} type='button' variant='contained'>
                  Add
               </Button>
            </form>
         </Paper>
      </Modal>
   )
}

export default AddNewPlaylistModal
