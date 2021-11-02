import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import GavelIcon from '@material-ui/icons/Gavel'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import SettingsIcon from '@material-ui/icons/Settings'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import SyncIcon from '@material-ui/icons/Sync'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import useStyles from './styles'

const menuList = [
   { icon: () => <AccountCircleIcon />, label: 'Profile', link: '/profile' },
   { icon: () => <SupervisedUserCircleIcon />, label: 'Friends', link: '/friend-list' },
   { icon: () => <SettingsIcon />, label: 'Setting', link: '/menu/setting' },
   { icon: () => <GavelIcon />, label: 'FAQ', link: '/faq' },
   { icon: () => <LiveHelpIcon />, label: 'Help & Support', link: '/help-and-support' },
   { icon: () => <SyncIcon />, label: 'Sync', link: '/menu/sync' },
   { icon: () => <SyncAltIcon />, label: 'Switch Account', link: '/menu/switch-account' },
   { icon: () => <MeetingRoomIcon />, label: 'Log Out', link: '/login' }
]

function MenuPage() {
   const styles = useStyles()

   const renderList = () =>
      menuList.map(item => (
         <ListItem key={item.label} className={styles.listItem}>
            <Link to={item.link} className={styles.link}>
               <Button className={styles.menuItem}>
                  <ListItemAvatar className={styles.listItemAvt}>
                     <Avatar>{item.icon()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText classes={{ primary: styles.listItemText }} primary={item.label} />
               </Button>
            </Link>
         </ListItem>
      ))

   return (
      <>
         <Header />
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {renderList()}
         </List>
      </>
   )
}

export default MenuPage
