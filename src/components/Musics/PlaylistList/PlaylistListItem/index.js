import { Button, CardMedia, Grid, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import EditIcon from '@material-ui/icons/Edit'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import { useState } from 'react'
import useStyles from './styles'

function PlaylistListItem({ showMoreBtn = true }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const styles = useStyles()

   return (
      <ListItem className={styles.listItem}>
         <ListItemButton style={{ padding: 0, borderRadius: 8 }}>
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
               <Typography variant='h5' className={styles.playlistName}>
                  A-On
               </Typography>
               <Typography variant='body1' className={styles.songCount}>
                  Songs: 42
               </Typography>
            </Box>
         </Button>

         {showMoreBtn && (
            <Box className={styles.moreBtn} onClick={handleClick}>
               <i className={clsx(styles.moreIcon, 'fad fa-ellipsis-v')}></i>
            </Box>
         )}

         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button'
            }}
         >
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Edit <EditIcon className={styles.menuIcon} />
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Save <BackspaceIcon className={styles.menuIcon} />
            </MenuItem>
         </Menu>
      </ListItem>
   )
}

export default PlaylistListItem
