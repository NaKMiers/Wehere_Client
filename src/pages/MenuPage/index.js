import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import GavelIcon from '@material-ui/icons/Gavel'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import ChangeIcon from '../../components/Icons/ChangeIcon'
import DiaryIcon from '../../components/Icons/DiaryIcon'
import FriendIcon from '../../components/Icons/FriendIcon'
import HelpAndSupportIcon from '../../components/Icons/HelpAndSupportIcon'
import LogOutIcon from '../../components/Icons/LogOutIcon'
import SettingsIcon from '../../components/Icons/SettingIcon'
import SyncIcon from '../../components/Icons/SyncIcon'
import UserIcon from '../../components/Icons/UserIcon'
import useStyles from './styles'

const menuList = [
   { icon: () => <UserIcon />, label: 'Profile', link: '/profile' },
   { icon: () => <DiaryIcon />, label: 'Diaries', link: '/diaries' },
   { icon: () => <FriendIcon />, label: 'Friends', link: '/friend-list' },
   { icon: () => <SettingsIcon mutiple />, label: 'Setting', link: '/menu/setting' },
   { icon: () => <GavelIcon />, label: 'FAQ', link: '/menu/faq' },
   { icon: () => <HelpAndSupportIcon />, label: 'Help & Support', link: '/menu/help-and-support' },
   { icon: () => <SyncIcon />, label: 'Sync', link: '/menu/sync' },
   { icon: () => <ChangeIcon />, label: 'Switch Account', link: '/menu/switch-account' },
   { icon: () => <LogOutIcon />, label: 'Log Out', link: '/login' }
]

function MenuPage() {
   const styles = useStyles()

   const renderList = () =>
      menuList.map(item => (
         <ListItem key={item.label} className={styles.listItem}>
            <Link to={item.link} className={styles.link}>
               <Button className={styles.menuItem}>
                  <ListItemAvatar className={styles.listItemAvt}>
                     <Avatar className={styles.menuIcon}>{item.icon()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText classes={{ primary: styles.listItemText }} primary={item.label} />
               </Button>
            </Link>
         </ListItem>
      ))

   return (
      <>
         <Header />
         <List style={{ maxWidth: 960, margin: '12px auto' }}>{renderList()}</List>
      </>
   )
}

export default MenuPage
