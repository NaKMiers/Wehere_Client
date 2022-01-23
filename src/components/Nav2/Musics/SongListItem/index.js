import { Avatar, Box, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'
import AddIcon from '../../../../components/Icons/AddIcon'
import DeleteIcon from '../../../Icons/DeleteIcon'
import HeartIcon from '../../../Icons/HeartIcon'
import MoreIcon from '../../../../components/Icons/MoreIcon'
import BlockIcon from '../../../../components/Icons/BlockIcon'
import AddSongToPlayListModal from '../AddSongToPlaylistModal'
import useStyles from './styles'
import { API } from '../../../../constants'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'

function SongListItem({
   isInPlayListModal = false,
   song,
   playlist,
   songsInPlaylist,
   curPlayistId,
   actionCreators,
}) {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenAddToPLModal, setOpenAddToPLModal] = useState(false)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleAddToPlayList = () => {
      setAnchorEl(null)
      setOpenAddToPLModal(true)
   }

   const handleDeletSong = () => {
      setAnchorEl(null)
   }

   const styles = useStyles()

   const handlePlaySong = () => {
      if (!isInPlayListModal) {
         actionCreators.setPlayingSong(song)
         actionCreators.setRecentlyList(song)
         if (playlist._id !== curPlayistId) {
            console.log('okokokok')
            actionCreators.setPlayingPlayList(songsInPlaylist)
            actionCreators.setCurPlaylistId(playlist._id)

            // const randomSongList = makeRandomList(songsInPlaylist)
            // actionCreators.setRandomSongList(randomSongList)
         }
      }
   }

   const makeRandomList = array => {
      let currentIndex = array.length,
         randomIndex

      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex)
         currentIndex--
         ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }

      return array
   }

   return (
      <ListItem className={styles.listItem}>
         <ListItemButton style={{ borderRadius: 8 }} onClick={handlePlaySong}>
            <Avatar className={styles.songImg} src={`${API}/${song.thumb}`} />
            <ListItemText primary={song.songName} secondary={song.author} />
         </ListItemButton>

         {!isInPlayListModal && (
            <Box className={styles.boxButton}>
               <span className={styles.button} onClick={handleClick}>
                  <MoreIcon color='secondary' />
               </span>
               <span className={styles.button}>
                  <HeartIcon liked={song.favorite} />
               </span>
            </Box>
         )}

         <Menu
            className={styles.menu}
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            {!playlist && (
               <MenuItem onClick={handleAddToPlayList} className={styles.menuItem}>
                  Add To Playlist <AddIcon circle style={{ marginLeft: 8 }} />
               </MenuItem>
            )}
            {!playlist ? (
               <MenuItem onClick={handleDeletSong} className={styles.menuItem}>
                  Delete <DeleteIcon />
               </MenuItem>
            ) : (
               <MenuItem onClick={handleDeletSong} className={styles.menuItem}>
                  Remove <BlockIcon style={{ marginLeft: 6 }} />
               </MenuItem>
            )}
         </Menu>

         <AddSongToPlayListModal open={isOpenAddToPLModal} handleClose={setOpenAddToPLModal} />
      </ListItem>
   )
}

const mapState = state => ({
   curPlayistId: state.music.curPlayistId,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(SongListItem)
