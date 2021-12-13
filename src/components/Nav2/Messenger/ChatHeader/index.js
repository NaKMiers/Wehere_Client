import { Avatar, Badge, Box, Menu, MenuItem, Typography } from '@material-ui/core'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import MoreIcon from '../../../../components/Icons/MoreIcon'
import SettingIcon from '../../../../components/Icons/SettingIcon'
import SettingChat from '../SettingChat'
import useStyles from './styles'
import { format } from 'timeago.js'

function ChatHeader({ curFriend }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenModalSettingChat, setOpenModalSettingChat] = useState(false)

   const isOpenHerderMenu = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
      setOpenModalSettingChat(false)
   }

   const handleOpenModalSettingChat = () => {
      setOpenModalSettingChat(true)
      setAnchorEl(null)
   }

   const styles = useStyles()

   return (
      <>
         <Box className={styles.chatHeader}>
            <Link to={`/profile/${curFriend._id}`} className={styles.avtLink}>
               <Avatar className={styles.avt} alt='avt' src={curFriend.avatar}></Avatar>
               <Badge
                  className={styles.badge}
                  color='primary'
                  variant='dot'
                  invisible={!curFriend.online}
               />
            </Link>
            <Box className={styles.textHeader}>
               <Typography className={styles.userName} variant='h6'>
                  {curFriend.username}
               </Typography>
               <Typography
                  className={styles.status}
                  variant='subtitle1'
                  style={{ color: !curFriend.online && '#ccc' }}
               >
                  {curFriend.online ? 'Active now' : format(curFriend.onlineLated)}
               </Typography>
            </Box>
            <Box className={styles.moreBtn} onClick={handleClick}>
               <MoreIcon rotate />
            </Box>
            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={isOpenHerderMenu}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               className={styles.menu}
            >
               <MenuItem onClick={handleOpenModalSettingChat} className={styles.menuItem}>
                  Seting <SettingIcon style={{ marginLeft: 8 }} />
               </MenuItem>
            </Menu>
         </Box>
         <SettingChat open={isOpenModalSettingChat} handleClose={handleClose} />
      </>
   )
}

export default memo(ChatHeader)
