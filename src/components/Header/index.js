import { AppBar, Avatar, Box, Grid, Toolbar } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ImageIcon from '@material-ui/icons/Image'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { NavLink } from 'react-router-dom'
import useStyles from './styles'

function Header() {
   const styles = useStyles()

   return (
      <Box>
         <AppBar position='static'>
            <Grid container>
               <Grid item xs={12} md={4} className={styles.gridContainer}>
                  <Toolbar className={styles.toolbar}>
                     <NavLink to='/blogs' exact activeClassName={styles.selected}>
                        <AssignmentIcon className={styles.headerIcon} />
                     </NavLink>
                     <NavLink to='/images' exact activeClassName={styles.selected}>
                        <ImageIcon className={styles.headerIcon} />
                     </NavLink>
                     <NavLink to='/' exact activeClassName={styles.selectedHome}>
                        <Avatar
                           className={styles.logo}
                           src='/images/wehere.jpg'
                           alt='Wehere Logo'
                        />
                     </NavLink>
                     <NavLink to='/videos' exact activeClassName={styles.selected}>
                        <VideoLibraryIcon className={styles.headerIcon} />
                     </NavLink>
                     <NavLink to='/shorts' exact activeClassName={styles.selected}>
                        <SlowMotionVideoIcon className={styles.headerIcon} />
                     </NavLink>
                  </Toolbar>
               </Grid>
            </Grid>
         </AppBar>
      </Box>
   )
}

export default Header
