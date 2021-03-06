import { Box, Button, List, Typography } from '@material-ui/core'
import { memo, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import AddNewSongModal from '../AddNewSongModal'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function SongList({ songList }) {
   const [isOpenAddNewSongModal, setOpenAddNewSongModal] = useState(false)
   const styles = useStyles()

   const handleCloseModal = useCallback(() => {
      setOpenAddNewSongModal(false)
   }, [])

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
            {songList.length ? (
               <Typography className={styles.songCount}>Songs: {songList.length}</Typography>
            ) : (
               <Typography className={styles.nosongs}>
                  Song list is empty. Please add new songs.
               </Typography>
            )}

            <Box className={styles.songList}>{renderSongList()}</Box>
         </List>

         <AddNewSongModal open={isOpenAddNewSongModal} handleCloseModal={handleCloseModal} />
      </>
   )
}

const mapState = state => ({
   songList: state.music.mySongList,
})

export default connect(mapState, null)(memo(SongList))
