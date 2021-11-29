import {
   AppBar,
   Avatar,
   Badge,
   Box,
   Button,
   IconButton,
   Menu,
   MenuItem,
   TextField,
   Toolbar,
   Typography,
} from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ChatIcon from '@material-ui/icons/Chat'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useLayoutEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import DiaryIcon from '../Icons/DiaryIcon'
import ExpandIcon from '../Icons/ExpandIcon'
import HomeIcon from '../Icons/HomeIcon'
import NotificationIcon from '../Icons/NotificationIcon'
import SearchIcon from '../Icons/SearchIcon'
import css from './header.module.css'
import useStyles from './styles'

const slide2matches = ['/messenger', '/musics', '/events', '/todolist', '/diaries']

function Header({ curUser, notifications, isSeenNotifications, actionCreators }) {
   const currentUrl = useLocation().pathname
   const initSlide = () => {
      if (
         currentUrl.startsWith(slide2matches[0]) ||
         currentUrl.startsWith(slide2matches[1]) ||
         currentUrl.startsWith(slide2matches[2]) ||
         currentUrl.startsWith(slide2matches[3]) ||
         currentUrl.startsWith(slide2matches[4])
      ) {
         return 2
      }
      return 1
   }
   const [slideHeader, setSlideHeader] = useState(initSlide)
   const [isShowSearchHeader, setShowSearchHeader] = useState(false)
   const toolbarRef = useRef()
   const styles = useStyles()
   useLayoutEffect(() => {
      slideHeader === 2
         ? toolbarRef.current.classList.add(css.slide2)
         : toolbarRef.current.classList.remove(css.slide2)
   })
   const handleChangeSlide = () => {
      setSlideHeader(slideHeader === 1 ? 2 : 1)
   }

   const [anchorEl, setAnchorEl] = useState(null)
   const openMenuNotification = Boolean(anchorEl)
   const handleOpenMenuNotification = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
      apis.seenNotifications(curUser._id)
      actionCreators.seenNotifications(true)
   }

   const renderMenuItem = () =>
      notifications.map((n, i) => {
         switch (n.type) {
            case 'ADD_FRIEND_REQUEST':
               return (
                  <MenuItem key={i} onClick={handleClose} className={styles.menuItem}>
                     <Avatar src={n.senderAvt} alt='avt' />
                     <Typography className={styles.usernameItem}>{n.senderUsername}</Typography>
                     <Box className={styles.menuBtnWrap}>
                        <IconButton
                           variant='contained'
                           className={styles.menuAcceptBtn}
                           onClick={() =>
                              handleResponseNotification({
                                 type: 'ADD_FRIEND_REQUEST',
                                 senderId: n.senderId,
                                 curUserId: curUser._id,
                                 value: true,
                                 curNotify: n._id,
                              })
                           }
                        >
                           <DoneIcon />
                        </IconButton>
                        <IconButton
                           variant='contained'
                           className={styles.menuDenyBtn}
                           onClick={() =>
                              handleResponseNotification({
                                 type: 'ADD_FRIEND_REQUEST',
                                 senderId: n.senderId,
                                 curUserId: curUser._id,
                                 value: false,
                                 curNotify: n._id,
                              })
                           }
                        >
                           <ClearIcon />
                        </IconButton>
                     </Box>
                  </MenuItem>
               )

            case 'ADD_FRIEND_RESPONSE':
               return (
                  <MenuItem key={i} onClick={handleClose} className={styles.menuItem}>
                     <Avatar src={n.senderAvt} alt='avt' />
                     <Typography className={styles.usernameItem}>
                        {n.senderUsername} has accepted your friend request.
                     </Typography>
                     <IconButton
                        variant='contained'
                        className={styles.menuDenyBtn}
                        onClick={() =>
                           handleResponseNotification({
                              type: 'ADD_FRIEND_RESPONSE',
                              senderId: n.senderId,
                              curUserId: curUser._id,
                              curNotify: n._id,
                           })
                        }
                     >
                        <ClearIcon />
                     </IconButton>
                  </MenuItem>
               )

            default:
               return undefined
         }
      })
   const handleResponseNotification = async ({ type, senderId, curUserId, value, curNotify }) => {
      switch (type) {
         case 'ADD_FRIEND_REQUEST':
            console.log('ADD_FRIEND_REQUEST')
            actionCreators.removeNotify(curNotify)
            await apis.addFriendResponse(senderId, curUserId, value, curNotify)
            break
         case 'ADD_FRIEND_ACCEPT': // remove notify
            console.log('ADD_FRIEND_ACCEPT')
            actionCreators.removeNotify(curNotify)
            await apis.removeNotify(senderId, curUserId, curNotify)
            break
         default:
            break
      }
   }

   return (
      <AppBar position='static' className={styles.header}>
         <Box className={styles.leftHeader}>
            {!isShowSearchHeader && <Typography className={styles.wehereLogo}>Wehere</Typography>}
            {isShowSearchHeader && (
               <TextField
                  style={{ width: '80%' }}
                  placeholder='What you need...?'
                  className={styles.searchTextField}
                  InputProps={{ className: styles.searchInput }}
               />
            )}
            <Button
               style={{ margin: !isShowSearchHeader && '0% 2%' }}
               className={styles.topHeaderBtn}
               onClick={() => setShowSearchHeader(!isShowSearchHeader)}
            >
               <SearchIcon style={{ fontSize: 20 }} />
            </Button>
         </Box>

         <Box className={styles.navigation}>
            <Box className={styles.topHeader}>
               {!isShowSearchHeader && (
                  <Typography className={styles.wehereLogo}>Wehere</Typography>
               )}

               {isShowSearchHeader && (
                  <TextField
                     style={{ width: '80%' }}
                     placeholder='What you need...?'
                     className={styles.searchTextField}
                     InputProps={{ className: styles.searchInput }}
                  />
               )}
               <Box className={styles.headerTopBtnWrap}>
                  <Button
                     className={styles.topHeaderBtn}
                     onClick={() => setShowSearchHeader(!isShowSearchHeader)}
                  >
                     <SearchIcon style={{ fontSize: 20 }} />
                  </Button>
                  <Button className={styles.topHeaderBtn} onClick={handleOpenMenuNotification}>
                     <Badge
                        badgeContent={notifications.length}
                        color='primary'
                        invisible={isSeenNotifications || !notifications.length}
                     >
                        <NotificationIcon style={{ fontSize: 20 }} />
                     </Badge>
                  </Button>
               </Box>
            </Box>

            <Toolbar className={styles.toolbar} ref={toolbarRef}>
               <NavLink
                  className={styles.headerItem}
                  to='/'
                  exact
                  activeClassName={styles.selectedHome}
               >
                  <HomeIcon />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/blogs'
                  exact
                  activeClassName={styles.selected}
               >
                  <AssignmentIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/images'
                  exact
                  activeClassName={styles.selected}
               >
                  <PhotoLibraryIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/videos'
                  exact
                  activeClassName={styles.selected}
               >
                  <VideoLibraryIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/shorts'
                  exact
                  activeClassName={styles.selected}
               >
                  <SlowMotionVideoIcon className={styles.headerIcon} />
               </NavLink>

               <Box
                  className={styles.headerItem}
                  onClick={handleChangeSlide}
                  style={{ margin: '0px -8px' }}
               >
                  <ExpandIcon
                     style={{
                        transform: `rotate(${slideHeader === 1 ? '90deg' : '-90deg'})`,
                        fontSize: 32,
                     }}
                  />
               </Box>

               <NavLink
                  className={styles.headerItem}
                  to='/messenger'
                  activeClassName={styles.selected}
               >
                  <ChatIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/musics'
                  activeClassName={styles.selected}
               >
                  <LibraryMusicIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/events'
                  exact
                  activeClassName={styles.selected}
               >
                  <EmojiEventsIcon className={styles.headerIcon} style={{ fontSize: 40 }} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/todolist'
                  exact
                  activeClassName={styles.selected}
               >
                  <CheckBoxIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/diaries'
                  exact
                  activeClassName={styles.selected}
               >
                  <DiaryIcon style={{ fontSize: 30 }} />
               </NavLink>
            </Toolbar>
         </Box>

         <Box className={styles.rightHeader}>
            {curUser && (
               <>
                  <Link to='/menu'>
                     <Avatar className={styles.avatar} alt='Pi Pi' src={curUser?.avatar} />
                  </Link>
                  <Typography className={styles.username}>{curUser?.username}</Typography>
                  <Button className={styles.topHeaderBtn} onClick={handleOpenMenuNotification}>
                     <Badge
                        badgeContent={notifications.length}
                        color='primary'
                        invisible={isSeenNotifications || !notifications.length}
                     >
                        <NotificationIcon style={{ fontSize: 20 }} />
                     </Badge>
                  </Button>
               </>
            )}
         </Box>

         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={openMenuNotification && notifications.length > 0}
            onClose={handleClose}
            className={styles.menu}
         >
            {renderMenuItem()}
         </Menu>
      </AppBar>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   notifications: state.notification.notificationList,
   isSeenNotifications: state.notification.seenNotifications,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(Header)
