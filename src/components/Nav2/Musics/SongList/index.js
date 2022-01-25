import { useState } from 'react'
import { connect } from 'react-redux'
import { Button, List, Typography, Box } from '@material-ui/core'
import SongListItem from '../SongListItem'
import AddNewSongModal from '../AddNewSongModal'
import useStyles from './styles'

function SongList({ songList }) {
   const [isOpenAddNewSongModal, setOpenAddNewSongModal] = useState(false)

   const handleCloseModal = () => {
      setOpenAddNewSongModal(false)
   }

   const styles = useStyles()

   const renderSongList = () => songList.map(s => <SongListItem key={s._id} song={s} />)

   return (
      <>
         <List component='div' disablePadding className={styles.songListWrap}>
            <Button
               variant='contained'
               className={styles.newSong}
               onClick={() => setOpenAddNewSongModal(true)}
            >
               Add To My Songs
            </Button>
            <Typography className={styles.songCount}>Songs: {songList.length}</Typography>

            <Box className={styles.songList}>{renderSongList()}</Box>
         </List>

         <AddNewSongModal open={isOpenAddNewSongModal} handleCloseModal={handleCloseModal} />
      </>
   )
}

const mapState = state => ({
   songList: state.music.mySongList,
})

export default connect(mapState, null)(SongList)
