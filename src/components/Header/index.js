import { AppBar, Avatar, Box, Button, TextField, Toolbar, Typography } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ChatIcon from '@material-ui/icons/Chat'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import DiaryIcon from '../Icons/DiaryIcon'
import ExpandIcon from '../Icons/ExpandIcon'
import HomeIcon from '../Icons/HomeIcon'
import NotificationIcon from '../Icons/NotificationIcon'
import SearchIcon from '../Icons/SearchIcon'
import css from './header.module.css'
import useStyles from './styles'

const slide2matches = ['/messenger', '/musics', '/events', '/todolist', '/diaries']

function Header() {
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

   return (
      <AppBar position='static' className={styles.header}>
         <Box className={styles.leftHeader}>
            <Typography className={styles.wehereLogo}>Wehere</Typography>
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
                  <Button className={styles.topHeaderBtn}>
                     <NotificationIcon style={{ fontSize: 20 }} />
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
            <TextField
               placeholder='What you need...?'
               className={styles.searchTextField}
               InputProps={{ className: styles.searchInput }}
            />
            <Button className={styles.topHeaderBtn}>
               <NotificationIcon style={{ fontSize: 20 }} />
            </Button>
            <Link to='/menu'>
               <Avatar className={styles.avatar} alt='Pi Pi' src='https://bom.to/2Mysnv' />
            </Link>
         </Box>
      </AppBar>
   )
}

export default Header
