import { Button, List, Typography } from '@material-ui/core'
import PlaylistListItem from './PlaylistListItem'
import useStyles from './styles'
import AddNewPlaylistModal from '../AddNewPlaylistModal'
import { useState } from 'react'

function PlaylistList() {
   const [isOpenAddNewPLModal, setOpenAddNewPLModal] = useState(false)

   const handleClose = () => {
      setOpenAddNewPLModal(false)
   }

   const styles = useStyles()

   return (
      <>
         <List style={{ padding: 16 }}>
            <Button
               variant='contained'
               className={styles.newPlaylistBtn}
               onClick={() => setOpenAddNewPLModal(true)}
            >
               New Playlist
            </Button>
            <Typography className={styles.playlistCount}>Playlist: 3</Typography>

            <PlaylistListItem />
            <PlaylistListItem />
            <PlaylistListItem />
         </List>

         <AddNewPlaylistModal open={isOpenAddNewPLModal} handleClose={handleClose} />
      </>
   )
}

export default PlaylistList
