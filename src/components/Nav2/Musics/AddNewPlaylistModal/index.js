import { Box, Button, List, Modal, Paper, TextField, Typography } from '@material-ui/core'
import { memo, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import apis from '../../../../apis'
import SearchIcon from '../../../Icons/SearchIcon'
import SongListItem from '../SongListItem'
import useStyle from './styles'

function AddNewPlaylistModal({ open, handleCloseModal, songList, actionCreators }) {
   const [playlistName, setPlaylistName] = useState('')
   const [selectSongs, setSelectSongs] = useState([])

   const styles = useStyle()

   const handleAddNewPlaylist = async () => {
      try {
         if (selectSongs.length) {
            const res = await apis.addPlaylist({ playlistName, songs: selectSongs })
            actionCreators.addNewPlaylist(res.data)
            handleCloseModal()
            handleClear()
         } else {
            alert('Please select songs to create new playlist.')
         }
      } catch (err) {
         console.log(err)
      }
   }

   const handleClear = () => {
      setPlaylistName('')
      setSelectSongs([])
   }

   const renderSongList = () =>
      songList.map(s => (
         <Box
            key={s._id}
            className={styles.songItemWrap}
            style={{ background: selectSongs.includes(s._id) && '#eee' }}
            onClick={() => {
               if (selectSongs.includes(s._id)) {
                  setSelectSongs(selectSongs.filter(id => id !== s._id))
               } else {
                  setSelectSongs([...selectSongs, s._id])
               }
            }}
         >
            <SongListItem song={s} isInPlayListModal />
         </Box>
      ))

   return (
      <Modal
         open={open}
         onClose={() => handleCloseModal()}
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
                  value={playlistName}
                  onChange={e => setPlaylistName(e.target.value)}
               />

               <form className={styles.searchForm}>
                  <input
                     placeholder='What you need to search ?'
                     className={styles.searchSongInput}
                  />
                  <Button className={styles.searchBtn}>
                     <SearchIcon style={{ fontSize: 16 }} />
                  </Button>
               </form>
               <List className={styles.songList}>{renderSongList()}</List>

               <Button
                  className={styles.submitBtn}
                  variant='contained'
                  onClick={handleAddNewPlaylist}
               >
                  Add
               </Button>
            </Box>
         </Paper>
      </Modal>
   )
}

const mapState = state => ({
   songList: state.music.mySongList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(AddNewPlaylistModal))
