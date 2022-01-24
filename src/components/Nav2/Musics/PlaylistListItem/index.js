import { Button, CardMedia, Grid, ListItem, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import { memo } from 'react'
import { API } from '../../../../constants'
import useStyles from './styles'

function PlaylistListItem({ playlist }) {
   const styles = useStyles()

   const renderPlaylistThumb = () => {
      if (playlist?.thumbs.length !== 4) {
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

   return (
      <ListItem className={styles.listItem}>
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
                  Songs: {playlist?.songs.length}
               </Typography>
            </Box>
         </Button>
      </ListItem>
   )
}

export default memo(PlaylistListItem)
