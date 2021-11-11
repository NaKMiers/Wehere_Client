import {
   Button,
   CardMedia,
   Grid,
   IconButton,
   ListItem,
   Menu,
   MenuItem,
   Typography
} from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EditIcon from '@material-ui/icons/Edit'
import BackspaceIcon from '@material-ui/icons/Backspace'
import useStyles from './styles'
import { useState } from 'react'

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
               <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  A-On
               </Typography>
               <Typography variant='body1' style={{ fontSize: 12 }}>
                  Songs: 42
               </Typography>
            </Box>
         </Button>

         {showMoreBtn && (
            <IconButton className={styles.moreBtn} onClick={handleClick}>
               <MoreVertIcon />
            </IconButton>
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
