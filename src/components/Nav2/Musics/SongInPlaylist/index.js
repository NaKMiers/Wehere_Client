import {
   Box,
   Button,
   CardMedia,
   Grid,
   ListItem,
   Menu,
   MenuItem,
   Typography,
} from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import apis from '../../../../apis'
import { API } from '../../../../constants'
import DeleteIcon from '../../../Icons/DeleteIcon'
import EditIcon from '../../../Icons/EditIcon'
import MoreIcon from '../../../Icons/MoreIcon'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function SongInPlaylist({ myPlaylistList, mySongList, actionCreators }) {
   let { playlistId } = useParams()
   const [playlist, setPlaylist] = useState({})
   const [songList, setSongList] = useState([])
   const [songsRemoved, setSongsRemoved] = useState([])
   const history = useHistory()

   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleRemoveSong = async songId => {
      try {
         const res = await apis.removeSongFromPlaylist(playlist._id, songId)
         setSongsRemoved([...songsRemoved, res.data.songId])
      } catch (err) {
         console.log(err)
      }
   }

   const styles = useStyles()

   useEffect(() => {
      const getPlaylist = async () => {
         if (playlistId) {
            try {
               const res = await apis.getPlaylist(playlistId)
               setPlaylist(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getPlaylist()
   }, [playlistId])

   useEffect(() => {
      const getSongListInPlaylist = async () => {
         if (playlist.songs) {
            try {
               const res = await apis.getSongListInPlaylist(playlist.songs)
               setSongList(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getSongListInPlaylist()
   }, [playlist.songs])

   const handleDeletePlaylist = async () => {
      console.log('handleDeletePlaylist')
      try {
         const res = await apis.deletePlaylist(playlist._id)
         history.push('/musics/playlists')
         actionCreators.deletePlaylist(res.data.deletedPlaylistId)
      } catch (err) {
         console.log(err)
      }
   }

   const renderPlaylistThumb = () => {
      if (playlist?._id) {
         if (playlist.thumbs.length !== 4) {
            return (
               <Grid item xs={12}>
                  <CardMedia
                     className={styles.subThumbPlSingle}
                     component='img'
                     image={`${API}/${playlist?.thumbs[0]}`}
                     alt='image'
                  />
               </Grid>
            )
         } else {
            return playlist?.thumbs.map(t => (
               <Grid key={t} item xs={6}>
                  <CardMedia
                     className={styles.subThumbPL}
                     component='img'
                     image={`${API}/${t}`}
                     alt='image'
                  />
               </Grid>
            ))
         }
      }
   }

   const renderSongList = () =>
      songList.map(s => {
         if (!songsRemoved.includes(s._id)) {
            return (
               <SongListItem
                  key={s._id}
                  song={s}
                  playlist={playlist}
                  songsInPlaylist={songList}
                  handleRemoveSong={handleRemoveSong}
               />
            )
         }
         return null
      })
   return (
      <Box>
         <ListItem>
            <ListItemButton style={{ padding: 0, borderRadius: 8 }}>
               <Grid container className={styles.playlistThumb}>
                  {renderPlaylistThumb()}
               </Grid>
            </ListItemButton>

            <Button className={styles.playlistBtn}>
               <Box>
                  <Typography variant='h5' className={styles.playlistName}>
                     {playlist?.playlistName}
                  </Typography>
                  <Typography variant='body1' className={styles.songCount}>
                     Songs: {playlist?.songs?.length}
                  </Typography>
               </Box>
            </Button>

            <Box className={styles.moreBtn} onClick={handleClick}>
               <MoreIcon rotate color='secondary' />
            </Box>

            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               className={styles.menu}
            >
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  Edit <EditIcon />
               </MenuItem>
               <MenuItem onClick={handleDeletePlaylist} className={styles.menuItem}>
                  Delete <DeleteIcon />
               </MenuItem>
            </Menu>
         </ListItem>
         <Box className={styles.songList}>{renderSongList()}</Box>
      </Box>
   )
}

const mapState = state => ({
   myPlaylistList: state.music.myPlaylistList,
   mySongList: state.music.mySonglist,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(SongInPlaylist)
