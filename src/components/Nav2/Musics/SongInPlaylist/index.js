import { Box, Button, CardMedia, Grid, ListItem, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import apis from '../../../../apis'
import { API } from '../../../../constants'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function SongInPlaylist({ myPlaylistList, mySongList }) {
   const [playlist, setPlaylist] = useState({})
   const [songList, setSongList] = useState([])

   let { playlistId } = useParams()
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
      songList.map(s => (
         <SongListItem key={s._id} song={s} playlist={playlist} songsInPlaylist={songList} />
      ))
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
