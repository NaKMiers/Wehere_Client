import {
   Avatar,
   Box,
   Button,
   CardMedia,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemIcon,
   ListItemText,
   ListSubheader,
   Menu,
   MenuItem,
   Typography
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import FolderIcon from '@material-ui/icons/Folder'
import Header from '../../components/Header'
import Video from '../../components/Video'
import Image from '../../components/Image'
import Blog from '../../components/Blog'
import useStyles from './styles'
import { styled } from '@material-ui/styles'
import { cloneElement, useState } from 'react'

function generate(element) {
   return [0, 1, 2].map(value =>
      cloneElement(element, {
         key: value
      })
   )
}

const Demo = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.paper
}))

function ProfilePage() {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const styles = useStyles()

   return (
      <div>
         <Header />
         <Box className={styles.profileWrap}>
            <Box className={styles.topProfile}>
               <CardMedia
                  height='300px'
                  className={styles.bgProfile}
                  component='img'
                  image='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
               />
               <Box className={styles.avatarWrap}>
                  <Avatar
                     className={styles.avatar}
                     alt='avt'
                     src='https://i.pinimg.com/originals/00/a4/10/00a410ce9c3a23c388cbd6c629cc3053.jpg'
                  />
               </Box>
               <Typography variant='h4' className={styles.name}>
                  Nguyen Anh Khoa
               </Typography>

               <Box className={styles.groupActionBtn}>
                  <Button className={styles.actionBtn} variant='contained' style={{ flexGrow: 4 }}>
                     Add Friend
                  </Button>
                  <Button className={styles.actionBtn} variant='contained' style={{ flexGrow: 4 }}>
                     Messenger
                  </Button>
                  <Button className={styles.actionBtn} variant='contained' onClick={handleClick}>
                     <MoreHorizIcon />
                  </Button>
                  <Menu
                     className={styles.menuAction}
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                  >
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        Profile
                     </MenuItem>
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        My account
                     </MenuItem>
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        Logout
                     </MenuItem>
                  </Menu>
               </Box>

               <Divider style={{ marginTop: 10 }} />
            </Box>
            <Box className={styles.bottomProfile}>
               <Box className={styles.info}>
                  <Grid item xs={12} md={6}>
                     <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
                        Info
                     </Typography>
                     <Demo>
                        <List>
                           {generate(
                              <ListItem>
                                 <ListItemIcon>
                                    <FolderIcon />
                                 </ListItemIcon>
                                 <ListItemText primary='Single-line item' />
                              </ListItem>
                           )}
                        </List>
                     </Demo>
                  </Grid>
               </Box>
               <Box className={styles.friends}>
                  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar>
                              <ImageIcon />
                           </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Photos' secondary='Jan 9, 2014' />
                     </ListItem>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar>
                              <WorkIcon />
                           </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Work' secondary='Jan 7, 2014' />
                     </ListItem>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar>
                              <BeachAccessIcon />
                           </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Vacation' secondary='July 20, 2014' />
                     </ListItem>
                  </List>
               </Box>
               <Box className={styles.posts}>
                  <Video />
                  <Image />
                  <Blog />
               </Box>
            </Box>
         </Box>
      </div>
   )
}

export default ProfilePage
