import { Avatar, Box, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { memo, useEffect, useState } from 'react'
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
import apis from '../../../../apis'
import { makeRandomList } from '../../../../commons/utils'
import { useCallback } from 'react'

function SongListItem({
   isInPlayListModal = false,
   mySongList,
   song,
   songPlaying,
   playlist,
   songsInPlaylist,
   curPlayistId,
   playingAt,
   handleRemoveSong,
   inRecentlyList,
   actionCreators,
}) {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenAddToPLModal, setOpenAddToPLModal] = useState(false)
   const open = Boolean(anchorEl)
   const [favorite, setFavorite] = useState(song?.favorite)

   const styles = useStyles()

   useEffect(() => {
      return () => {
         setFavorite(!favorite)
      }
   }, [song?.favorite, favorite])

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleOpenModal = () => {
      setAnchorEl(null)
      setOpenAddToPLModal(true)
   }
   const handleCloseModal = useCallback(() => {
      setOpenAddToPLModal(false)
   }, [])

   const handleDeleteSong = async () => {
      try {
         const res = await apis.deleteSong(song._id)
         actionCreators.deleteSong(res.data.deletedSongId)
      } catch (err) {
         console.log(err)
      }
      setAnchorEl(null)
   }

   const handlePlaySong = () => {
      if (!isInPlayListModal && songPlaying?._id !== song?._id) {
         let randomSongList
         actionCreators.setPlayingSong(song)
         actionCreators.setRecentlyList(song)

         // play in mySongList
         if (!playlist?._id && playingAt !== 'mySongList') {
            actionCreators.setPlayingAt('mySongList')

            randomSongList = makeRandomList(mySongList)
            actionCreators.setRandomSongList(randomSongList)
         }

         // play in playlist
         if (playlist?._id && playlist?._id !== curPlayistId) {
            actionCreators.setPlayingAt('playlist')
            actionCreators.setPlayingPlayList(songsInPlaylist)
            actionCreators.setCurPlaylistId(playlist?._id)

            randomSongList = makeRandomList(songsInPlaylist)
            actionCreators.setRandomSongList(randomSongList)
         }
      }
   }

   const handleMarkFavoriteSong = async () => {
      try {
         await apis.markFavoriteSong(song._id, !favorite)
         setFavorite(!favorite)
      } catch (err) {
         console.log(err)
      }
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
                  <MoreIcon color='secondary' rotate={inRecentlyList} />
               </span>
               {!inRecentlyList && (
                  <span className={styles.button} onClick={handleMarkFavoriteSong}>
                     <HeartIcon liked={favorite} />
                  </span>
               )}
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
               <MenuItem onClick={handleOpenModal} className={styles.menuItem}>
                  Add To Playlist <AddIcon circle style={{ marginLeft: 8 }} />
               </MenuItem>
            )}
            {!playlist ? (
               !inRecentlyList && (
                  <MenuItem onClick={handleDeleteSong} className={styles.menuItem}>
                     Delete <DeleteIcon />
                  </MenuItem>
               )
            ) : (
               <MenuItem onClick={() => handleRemoveSong(song._id)} className={styles.menuItem}>
                  Remove <BlockIcon style={{ marginLeft: 6 }} />
               </MenuItem>
            )}
         </Menu>

         <AddSongToPlayListModal
            open={isOpenAddToPLModal}
            handleCloseModal={handleCloseModal}
            song={song}
         />
      </ListItem>
   )
}

const mapState = state => ({
   songPlaying: state.music.songPlaying,
   mySongList: state.music.mySongList,
   curPlayistId: state.music.curPlayistId,
   playingAt: state.music.playingAt,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(SongListItem))
