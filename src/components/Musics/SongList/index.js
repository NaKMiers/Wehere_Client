import { useState } from 'react'
import { Button, List, Typography } from '@material-ui/core'
import SongListItem from '../SongListItem'
import useStyles from './styles'
import AddNewSongModal from '../AddNewSongModal'

function SongList() {
   const [isOpenAddNewSongModal, setOpenAddNewSongModal] = useState(false)

   const handleClose = () => {
      setOpenAddNewSongModal(false)
   }

   const styles = useStyles()
   return (
      <>
         <List component='div' disablePadding>
            <Button
               variant='contained'
               className={styles.newSong}
               onClick={() => setOpenAddNewSongModal(true)}
            >
               Add To My Songs
            </Button>
            <Typography className={styles.songCount}>Songs: 256</Typography>

            <SongListItem />
            <SongListItem />
            <SongListItem />
            <SongListItem />
            <SongListItem />
         </List>

         <AddNewSongModal open={isOpenAddNewSongModal} handleClose={handleClose} />
      </>
   )
}

export default SongList
