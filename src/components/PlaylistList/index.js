import { Button, CardMedia, Grid, List, ListItem, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './styles'

function PlaylistList() {
   const styles = useStyles()

   return (
      <List>
         <Button variant='contained' className={styles.newPlaylistBtn}>
            New Playlist
         </Button>
         <Typography className={styles.playlistCount}>Playlist: 3</Typography>
         <ListItem style={{ padding: 0, marginBottom: 16 }}>
            <ListItemButton style={{ padding: 0 }}>
               <Grid container className={styles.playlistAvt}>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
               </Grid>
            </ListItemButton>

            <Button className={styles.playlistBtn}>
               <Box>
                  <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                     A-On
                  </Typography>
                  <Typography variant='body1' style={{ fontSize: 12 }}>
                     Songs: 42
                  </Typography>
               </Box>
            </Button>
         </ListItem>
         <ListItem style={{ padding: 0, marginBottom: 16 }}>
            <ListItemButton style={{ padding: 0 }}>
               <Grid container className={styles.playlistAvt}>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
               </Grid>
            </ListItemButton>

            <Button className={styles.playlistBtn}>
               <Box>
                  <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                     B-On
                  </Typography>
                  <Typography variant='body1' style={{ fontSize: 12 }}>
                     Songs: 158
                  </Typography>
               </Box>
            </Button>
         </ListItem>
         <ListItem style={{ padding: 0, marginBottom: 16 }}>
            <ListItemButton style={{ padding: 0 }}>
               <Grid container className={styles.playlistAvt}>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <CardMedia
                        className={styles.imgPlaylist}
                        component='img'
                        image='https://bom.to/re33TX'
                        alt='image'
                     />
                  </Grid>
               </Grid>
            </ListItemButton>

            <Button className={styles.playlistBtn}>
               <Box>
                  <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                     C-On
                  </Typography>
                  <Typography variant='body1' style={{ fontSize: 12 }}>
                     Songs: 116
                  </Typography>
               </Box>
            </Button>
         </ListItem>
      </List>
   )
}

export default PlaylistList
