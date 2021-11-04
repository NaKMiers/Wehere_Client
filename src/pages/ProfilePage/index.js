import {
   Avatar,
   Box,
   Button,
   ButtonGroup,
   CardMedia,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemIcon,
   ListItemText,
   Menu,
   MenuItem,
   Typography
} from '@material-ui/core'
import CakeIcon from '@material-ui/icons/Cake'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HomeIcon from '@material-ui/icons/Home'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { styled } from '@material-ui/styles'
import { useState } from 'react'
import Blog from '../../components/Blog'
import Header from '../../components/Header'
import Image from '../../components/Image'
import Video from '../../components/Video'
import useStyles from './styles'

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

   const [currentTab, setCurrentTab] = useState('posts')

   const renderTabs = () => {
      if (currentTab === 'info') {
         return (
            <Box className={styles.infoTab}>
               <Grid item xs={12} md={6}>
                  <Demo>
                     <List>
                        <ListItem>
                           <ListItemIcon>
                              <CakeIcon />
                           </ListItemIcon>
                           <ListItemText primary='14/09/2004' />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon>
                              <FavoriteIcon />
                           </ListItemIcon>
                           <ListItemText primary='Single' />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon>
                              <HomeIcon />
                           </ListItemIcon>
                           <ListItemText primary='Vinh Long' />
                        </ListItem>
                     </List>
                  </Demo>
               </Grid>
            </Box>
         )
      } else if (currentTab === 'friends') {
         return (
            <Box className={styles.friendsTab}>
               <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User1' />
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User2' />
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User3' />
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
               </List>
            </Box>
         )
      } else {
         return (
            <Box className={styles.postsTab}>
               <Video />
               <Image />
               <Blog />
            </Box>
         )
      }
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
                  <Button
                     className={styles.actionBtn}
                     variant='contained'
                     style={{ backgroundColor: '#2196f3' }}
                  >
                     Add Friend
                  </Button>
                  <Button
                     className={styles.actionBtn}
                     variant='contained'
                     style={{ backgroundColor: '#333' }}
                  >
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
                        Unfriend
                     </MenuItem>
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        Block
                     </MenuItem>
                  </Menu>
               </Box>
               <Divider style={{ marginTop: 10 }} />
            </Box>
            <Box className={styles.bottomProfile}>
               <Box className={styles.tabsList}>
                  <ButtonGroup
                     variant='text'
                     aria-label='text button group'
                     className={styles.tabButtonsWrap}
                  >
                     <Button
                        className={styles.tabButton}
                        style={{
                           border: 'none',
                           backgroundColor: `${currentTab === 'info' ? '#ddd' : '#fff'}`
                        }}
                        onClick={() => setCurrentTab('info')}
                     >
                        Info
                     </Button>
                     <Button
                        className={styles.tabButton}
                        style={{
                           border: 'none',
                           backgroundColor: `${currentTab === 'posts' ? '#ddd' : '#fff'}`
                        }}
                        onClick={() => setCurrentTab('posts')}
                     >
                        Posts
                     </Button>
                     <Button
                        className={styles.tabButton}
                        style={{
                           border: 'none',
                           backgroundColor: `${currentTab === 'friends' ? '#ddd' : '#fff'}`
                        }}
                        onClick={() => setCurrentTab('friends')}
                     >
                        Friends
                     </Button>
                  </ButtonGroup>

                  {renderTabs()}
               </Box>
            </Box>
         </Box>
      </div>
   )
}

export default ProfilePage
