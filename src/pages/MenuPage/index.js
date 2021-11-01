import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import GavelIcon from '@material-ui/icons/Gavel'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import SettingsIcon from '@material-ui/icons/Settings'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import SyncIcon from '@material-ui/icons/Sync'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import React from 'react'

const menuList = [
   { icon: () => <AccountCircleIcon />, label: 'Profile' },
   { icon: () => <SupervisedUserCircleIcon />, label: 'Friends' },
   { icon: () => <SettingsIcon />, label: 'Setting' },
   { icon: () => <GavelIcon />, label: 'FAQ' },
   { icon: () => <LiveHelpIcon />, label: 'Help & Support' },
   { icon: () => <SyncIcon />, label: 'Sync' },
   { icon: () => <SyncAltIcon />, label: 'Change Account' },
   { icon: () => <MeetingRoomIcon />, label: 'Log Out' }
]

function MenuPage() {
   const renderList = () =>
      menuList.map(item => (
         <ListItem>
            <ListItemAvatar>
               <Avatar>{item.icon()}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.label} />
         </ListItem>
      ))

   return (
      <div style={{ padding: 16 }}>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {renderList()}
            {/* <ListItem>
               <ListItemAvatar>
                  <Avatar>
                     <ImageIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='Profile' />
            </ListItem>
            <ListItem>
               <ListItemAvatar>
                  <Avatar>
                     <WorkIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='Setting' />
            </ListItem>
            <ListItem>
               <ListItemAvatar>
                  <Avatar>
                     <BeachAccessIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='Vacation' />
            </ListItem> */}
         </List>
      </div>
   )
}

export default MenuPage
