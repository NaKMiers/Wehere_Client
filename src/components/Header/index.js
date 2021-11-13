import { AppBar, Avatar, Grid, Toolbar } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ChatIcon from '@material-ui/icons/Chat'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import ImageIcon from '@material-ui/icons/Image'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import MenuIcon from '@material-ui/icons/Menu'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import useStyles from './styles'

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
   const [slideHeader, setSlideHeader] = useState(0)
   const toolbarRef = useRef()
   const slideArrowRef = useRef()
   const styles = useStyles()
   const match = useRouteMatch(useLocation().pathname)

   useLayoutEffect(() => {
      if (slideHeader2UrlList.includes(match.path)) {
         setSlideHeader(3)
      }
   }, [match.path])

   useLayoutEffect(() => {
      if (slideHeader === 2) {
         Object.assign(toolbarRef.current.style, {
            transform: 'translateX(-45.2%)',
            transition: 'transform ease-in-out 0.5s'
         })
         Object.assign(slideArrowRef.current.style, {
            transform: 'rotate(180deg)',
            transition: 'transform ease-in-out 0.5s'
         })
      } else if (slideHeader === 1) {
         Object.assign(toolbarRef.current.style, {
            transform: 'translateX(0)',
            transition: 'transform ease-in-out 0.5s'
         })
         Object.assign(slideArrowRef.current.style, {
            transform: 'rotate(0)',
            transition: 'transform ease-in-out 0.5s'
         })
      } else if (slideHeader === 3) {
         Object.assign(toolbarRef.current.style, {
            transform: 'translateX(-45.2%)'
         })
         Object.assign(slideArrowRef.current.style, {
            transform: 'rotate(180deg)'
         })
      }
   }, [slideHeader])

   return (
      <AppBar position='static' className={styles.header}>
         <Grid container>
            <Grid item xs={12} md={4} className={styles.gridContainer}>
               <Toolbar className={styles.toolbar} ref={toolbarRef}>
                  <NavLink
                     className={styles.tabItem}
                     to='/'
                     exact
                     activeClassName={styles.selectedHome}
                  >
                     <Avatar className={styles.logo} src='/images/wehere.jpg' alt='Wehere Logo' />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/blogs'
                     exact
                     activeClassName={styles.selected}
                  >
                     <AssignmentIcon className={styles.headerIcon} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/images'
                     exact
                     activeClassName={styles.selected}
                  >
                     <ImageIcon className={styles.headerIcon} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/videos'
                     exact
                     activeClassName={styles.selected}
                  >
                     <VideoLibraryIcon className={styles.headerIcon} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/shorts'
                     exact
                     activeClassName={styles.selected}
                  >
                     <SlowMotionVideoIcon className={styles.headerIcon} />
                  </NavLink>

                  <ArrowForwardIosIcon
                     className={styles.slideIcon}
                     onClick={() => setSlideHeader(slideHeader < 2 ? 2 : 1)}
                     ref={slideArrowRef}
                  />

                  <NavLink
                     className={styles.tabItem}
                     to='/messenger'
                     exact
                     activeClassName={styles.selected}
                  >
                     <ChatIcon className={styles.headerIcon} style={{ marginTop: 5 }} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/musics'
                     exact
                     activeClassName={styles.selected}
                  >
                     <LibraryMusicIcon className={styles.headerIcon} style={{ marginTop: 5 }} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/events'
                     exact
                     activeClassName={styles.selected}
                  >
                     <EmojiEventsIcon className={styles.headerIcon} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/todolist'
                     exact
                     activeClassName={styles.selected}
                  >
                     <CheckBoxIcon className={styles.headerIcon} />
                  </NavLink>
                  <NavLink
                     className={styles.tabItem}
                     to='/menu'
                     exact
                     activeClassName={styles.selected}
                  >
                     <MenuIcon className={styles.headerMenuIcon} />
                  </NavLink>
               </Toolbar>
            </Grid>
         </Grid>
      </AppBar>
   )
}

export default Header
