import { AppBar, Avatar, Box, Toolbar } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ChatIcon from '@material-ui/icons/Chat'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import BarIcon from '../Icons/BarIcon'
import ExpandIcon from '../Icons/ExpandIcon'
import useStyles from './styles'
import css from './header.module.css'
import clsx from 'clsx'

const slideHeader2UrlList = [
   '/messenger',
   '/musics',
   '/events',
   '/todolist',
   '/profile',
   '/friend-list',
   '/menu',
   '/menu/faq',
   '/menu/help-and-support',
   '/menu/setting',
   '/menu/switch-account',
   '/menu/sync',
   '/diaries'
]

function Header() {
   const [slideHeader, setSlideHeader] = useState(1)
   const toolbarRef = useRef()
   const styles = useStyles()
   const match = useRouteMatch(useLocation().pathname)

   useLayoutEffect(() => {
      slideHeader2UrlList.includes(match.path) && setSlideHeader(2)
   }, [match.path])

   useLayoutEffect(() => {
      slideHeader === 2
         ? toolbarRef.current.classList.add(css.slide2)
         : toolbarRef.current.classList.remove(css.slide2)
   })

   const handleChangeSlide = () => {
      setSlideHeader(slideHeader === 1 ? 2 : 1)
   }

   return (
      <AppBar position='static' className={clsx(styles.header, css.asd)}>
         <Box className={styles.headerContainer}>
            <Toolbar className={styles.toolbar} ref={toolbarRef}>
               <NavLink
                  className={styles.headerItem}
                  to='/'
                  exact
                  activeClassName={styles.selectedHome}
               >
                  <Avatar src='/images/wehere.jpg' alt='Wehere Logo' className={styles.avatar} />
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
                        fontSize: 32
                     }}
                  />
               </Box>

               <NavLink
                  className={styles.headerItem}
                  to='/messenger'
                  exact
                  activeClassName={styles.selected}
               >
                  <ChatIcon className={styles.headerIcon} />
               </NavLink>
               <NavLink
                  className={styles.headerItem}
                  to='/musics'
                  exact
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
                  <EmojiEventsIcon className={styles.headerIcon} />
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
                  to='/menu'
                  exact
                  activeClassName={styles.selected}
               >
                  <BarIcon />
               </NavLink>
            </Toolbar>
         </Box>
      </AppBar>
   )
}

export default Header
