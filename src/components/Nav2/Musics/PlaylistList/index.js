import { Button, List, Typography, Box } from '@material-ui/core'
import PlaylistListItem from './PlaylistListItem'
import useStyles from './styles'
import AddNewPlaylistModal from '../AddNewPlaylistModal'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'

function PlaylistList({ playlistList }) {
   const [isOpenAddNewPLModal, setOpenAddNewPLModal] = useState(false)

   const handleCloseModal = () => {
      setOpenAddNewPLModal(false)
   }

   const styles = useStyles()

   const renderPlaylists = () =>
      playlistList.map(p => <PlaylistListItem key={p._id} playlist={p} />)

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

            <Box className={styles.playlistListWrap}>{renderPlaylists()}</Box>
         </List>

         <AddNewPlaylistModal open={isOpenAddNewPLModal} handleCloseModal={handleCloseModal} />
      </>
   )
}

const mapState = state => ({
   playlistList: state.music.myPlaylistList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(PlaylistList)
