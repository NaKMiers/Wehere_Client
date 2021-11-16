import { Button, CardMedia, Grid, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import { useState } from 'react'
import DeleteIcon from '../../../../components/Icons/DeleteIcon'
import EditIcon from '../../../../components/Icons/EditIcon'
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
               <i className={clsx(styles.moreIcon, 'fad fa-ellipsis-v')} />
            </Box>
         )}

         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Edit <EditIcon />
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Save <DeleteIcon />
            </MenuItem>
         </Menu>
      </ListItem>
   )
}

export default PlaylistListItem
