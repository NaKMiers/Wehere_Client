import { Avatar, List, ListItemAvatar, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { memo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import Header from '../../../components/Header'
import ChangeIcon from '../../../components/Icons/ChangeIcon'
import In4Icon from '../../../components/Icons/In4Icon'
import FriendIcon from '../../../components/Icons/FriendIcon'
import HelpAndSupportIcon from '../../../components/Icons/HelpAndSupportIcon'
import LogOutIcon from '../../../components/Icons/LogOutIcon'
import SettingsIcon from '../../../components/Icons/SettingIcon'
import SyncIcon from '../../../components/Icons/SyncIcon'
import UserIcon from '../../../components/Icons/UserIcon'
import useStyles from './styles'

function MenuPage({ curUser, actionCreators }) {
   const menuList = [
      { icon: () => <UserIcon />, label: 'Profile', link: `/profile/${curUser?._id}` },
      { icon: () => <FriendIcon />, label: 'Friends', link: '/friend-list' },
      { icon: () => <SettingsIcon mutiple />, label: 'Setting', link: '/menu/setting' },
      { icon: () => <SyncIcon />, label: 'Sync', link: '/menu/sync' },
      { icon: () => <ChangeIcon />, label: 'Switch Account', link: '/menu/switch-account' },
      { icon: () => <In4Icon />, label: 'Info', link: '/menu/in4' },
      {
         icon: () => <HelpAndSupportIcon />,
         label: 'Help & Support',
         link: '/menu/help-and-support',
      },
   ]
   const styles = useStyles()

   const renderList = () =>
      menuList.map(item => (
         <ListItemButton key={item.label} className={styles.listItem}>
            <Link to={item.link} className={styles.link}>
               <ListItemAvatar className={styles.listItemAvt}>
                  <Avatar className={styles.menuIcon}>{item.icon()}</Avatar>
               </ListItemAvatar>
               <ListItemText classes={{ primary: styles.listItemText }} primary={item.label} />
            </Link>
         </ListItemButton>
      ))

   const handleLogOut = () => {
      actionCreators.logOut()
   }

   return (
      <>
         <Header />
         <List style={{ maxWidth: 960, margin: '12px auto' }}>
            {renderList()}

            <ListItemButton className={styles.listItem} onClick={handleLogOut}>
               <Link to='/login' className={styles.link}>
                  <ListItemAvatar className={styles.listItemAvt}>
                     <Avatar className={styles.menuIcon}>
                        <LogOutIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText classes={{ primary: styles.listItemText }} primary='Log Out' />
               </Link>
            </ListItemButton>
         </List>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(MenuPage))
