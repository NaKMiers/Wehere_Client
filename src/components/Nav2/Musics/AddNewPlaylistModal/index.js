import { Button, Fade, List, Modal, Paper, TextField, Typography, Box } from '@material-ui/core'
import SearchIcon from '../../../Icons/SearchIcon'
import SongListItem from '../SongListItem'
import useStyle from './styles'

function AddNewPlaylistModal({ open, handleClose }) {
   const styles = useStyle()

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
                  Add New Playlist
               </Typography>
               <Box className={styles.form}>
                  <TextField
                     className={styles.textField}
                     id='filled-search'
                     label='Playlist Name'
                     variant='filled'
                  />

                  <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
                     <input
                        placeholder='What you need to search ?'
                        className={styles.searchSongInput}
                     />
                     <Button className={styles.searchBtn}>
                        <SearchIcon style={{ fontSize: 16 }} />
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
               </Box>
            </Paper>
         </Modal>
      </Fade>
   )
}

export default AddNewPlaylistModal
