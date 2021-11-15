import { Avatar, Box, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import BackspaceIcon from '@material-ui/icons/Backspace'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'
import HeartIcon from '../../Icons/HeartIcon'
import MoreIcon from '../../Icons/MoreIcon'
import AddSongToPlayListModal from '../AddSongToPlaylistModal'
import useStyles from './styles'

function SongListItem({ showActionBtn = true }) {
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
   return (
      <ListItem className={styles.listItem}>
         <ListItemButton style={{ borderRadius: 8 }}>
            <Avatar className={styles.songImg} src='https://bom.to/anjho0' />
            <ListItemText primary='So Am i' secondary='Ava Max' />
         </ListItemButton>

         {showActionBtn && (
            <Box className={styles.boxButton}>
               <span className={styles.button} onClick={handleClick}>
                  <MoreIcon color='secondary' />
               </span>
               <span className={styles.button}>
                  <HeartIcon liked />
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
               horizontal: 'left'
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left'
            }}
         >
            <MenuItem onClick={handleAddToPlayList} className={styles.menuItem}>
               Add To Playlist <AddCircleIcon style={{ marginLeft: 8 }} />
            </MenuItem>
            <MenuItem onClick={handleDeletSong} className={styles.menuItem}>
               Delete <BackspaceIcon style={{ marginLeft: 8 }} />
            </MenuItem>
         </Menu>

         <AddSongToPlayListModal open={isOpenAddToPLModal} handleClose={setOpenAddToPLModal} />
      </ListItem>
   )
}

export default SongListItem
