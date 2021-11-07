import { Avatar, Badge, IconButton, ListItemText, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function FriendListItem({ onlineList, isOnline }) {
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
      <>
         <ListItemButton className={styles.onlineUserBtn}>
            <Link to='/messenger/user1' className={styles.link}>
               <Avatar className={styles.avatar} src='https://bom.to/E6b68V' alt='avt' />
               <Badge
                  variant='dot'
                  className={styles.badge}
                  color='primary'
                  invisible={!isOnline}
               />
               <ListItemText primary='User1' secondary='5p before' className={styles.userName} />
            </Link>
            <IconButton onClick={handleClick}>
               <MoreVertIcon />
            </IconButton>
         </ListItemButton>
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
               Hide
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Remove
            </MenuItem>
            {!onlineList && (
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  Mark Read
               </MenuItem>
            )}
         </Menu>
      </>
   )
}

export default FriendListItem
