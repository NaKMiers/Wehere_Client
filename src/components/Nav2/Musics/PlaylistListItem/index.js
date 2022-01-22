import { Button, CardMedia, Grid, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import { memo, useState } from 'react'
import DeleteIcon from '../../../Icons/DeleteIcon'
import EditIcon from '../../../Icons/EditIcon'
import MoreIcon from '../../../Icons/MoreIcon'
import useStyles from './styles'
import { API } from '../../../../constants'

function PlaylistListItem({ playlist, showMoreBtn = true }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
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

         {showMoreBtn && (
            <Box className={styles.moreBtn} onClick={handleClick}>
               <MoreIcon rotate color='secondary' />
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
            className={styles.menu}
         >
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Edit <EditIcon />
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Delete <DeleteIcon />
            </MenuItem>
         </Menu>
      </ListItem>
   )
}

export default memo(PlaylistListItem)
