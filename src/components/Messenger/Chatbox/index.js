import {
   Avatar,
   Badge,
   Box,
   Button,
   IconButton,
   Menu,
   MenuItem,
   Typography
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import { useState } from 'react'

import useStyles from './styles'

function Chatbox() {
   const [anchorEl, setAnchorEl] = useState(null)
   const isOpenHerderMenu = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const styles = useStyles()

   return (
      <Box>
         <Box className={styles.chatHeader}>
            <Button className={styles.avtBtn}>
               <Avatar className={styles.avt} alt='avt' src='https://bom.to/7UX3Hq'></Avatar>
               <Badge className={styles.badge} color='primary' variant='dot' invisible={false} />
            </Button>
            <Box className={styles.textHeader}>
               <Typography className={styles.userName} variant='h6'>
                  Nguyen Anh Khoa
               </Typography>
               <Typography className={styles.status} variant='subtitle1'>
                  Action now
               </Typography>
            </Box>
            <IconButton onClick={handleClick} className={styles.menuIcon}>
               <MoreVertIcon />
            </IconButton>
            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={isOpenHerderMenu}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button'
               }}
            >
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  <SettingsApplicationsIcon style={{ marginRight: 4 }} />
                  Seting
               </MenuItem>
            </Menu>
         </Box>
         <Box classname={styles.chatContent}></Box>
         <Box classname={styles.chatInput}></Box>
      </Box>
   )
}

export default Chatbox
