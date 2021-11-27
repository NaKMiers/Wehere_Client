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
   Typography,
} from '@material-ui/core'
import CakeIcon from '@material-ui/icons/Cake'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HomeIcon from '@material-ui/icons/Home'
import { styled } from '@material-ui/styles'
import { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import Blog from '../../components/Blog'
import Header from '../../components/Header'
import BlockIcon from '../../components/Icons/BlockIcon'
import HideUserIcon from '../../components/Icons/HideUserIcon'
import MoreIcon from '../../components/Icons/MoreIcon'
import Image from '../../components/Image'
import Video from '../../components/Video'
import useStyles from './styles'

const Demo = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
}))

function ProfilePage({ curUser, userProfile, actionCreators }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   const [currentTab, setCurrentTab] = useState('posts')

   const styles = useStyles()
   const localtion = useLocation()

   useLayoutEffect(() => {
      const userId = localtion.pathname.split('/')[2]
      actionCreators.getUserRequest(userId)
   }, [actionCreators, localtion.pathname])

   const renderTabs = () => {
      if (currentTab === 'info') {
         return (
            <Box className={styles.tab}>
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
            <Box className={styles.tab}>
               <List>
                  <ListItem className={styles.fiendListItem}>
                     <Link className={styles.linkFiendListItem} to='/profile/user1'>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='https://bom.to/tIyuw5' />
                        </ListItemAvatar>
                        <ListItemText primary='User1' />
                     </Link>
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
                  <ListItem className={styles.fiendListItem}>
                     <Link className={styles.linkFiendListItem} to='/profile/user2'>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='https://bom.to/tIyuw5'></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='User2' />
                     </Link>
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
                  <ListItem className={styles.fiendListItem}>
                     <Link className={styles.linkFiendListItem} to='/profile/user3'>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='https://bom.to/tIyuw5'></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='User3' />
                     </Link>
                     <Button className={styles.friendBtn} variant='contained'>
                        Add Friend
                     </Button>
                  </ListItem>
               </List>
            </Box>
         )
      } else {
         return (
            <Box className={styles.tab} style={{ padding: '24px 8px' }}>
               <Video />
               <Image />
               <Blog />
            </Box>
         )
      }
   }

   const handleAddFriendRequest = async () => {
      await apis.addFriendRequest(userProfile._id, curUser._id)
   }

   return (
      <div>
         <Header />
         <Box className={styles.profileWrap}>
            <Box className={styles.topProfile}>
               <CardMedia
                  height='300px'
                  className={styles.bgProfile}
                  component='img'
                  image={userProfile?.background}
               />
               <Box className={styles.avatarWrap}>
                  <Avatar className={styles.avatar} alt='avt' src={userProfile?.avatar} />
               </Box>
               <Typography variant='h4' className={styles.name}>
                  {userProfile?.username}
               </Typography>

               <Box className={styles.groupActionBtn}>
                  <Button
                     className={styles.addFriendBtn}
                     variant='contained'
                     onClick={handleAddFriendRequest}
                     disabled={userProfile?.friends.includes(curUser._id)}
                  >
                     {!userProfile?.friends.includes(curUser._id) ? 'Add friend' : 'Friend'}
                  </Button>
                  <Button className={styles.actionBtn} variant='contained'>
                     Messenger
                  </Button>
                  <Button className={styles.actionBtn} variant='contained' onClick={handleClick}>
                     <MoreIcon style={{ color: '#fff' }} />
                  </Button>

                  <Menu
                     className={styles.menuAction}
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                  >
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        Unfriend <HideUserIcon />
                     </MenuItem>
                     <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                        Block <BlockIcon style={{ marginLeft: 8 }} />
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
                           backgroundColor: `${currentTab === 'info' ? '#eee' : '#fff'}`,
                        }}
                        onClick={() => setCurrentTab('info')}
                     >
                        Info
                     </Button>
                     <Button
                        className={styles.tabButton}
                        style={{
                           border: 'none',
                           backgroundColor: `${currentTab === 'posts' ? '#eee' : '#fff'}`,
                        }}
                        onClick={() => setCurrentTab('posts')}
                     >
                        Posts
                     </Button>
                     <Button
                        className={styles.tabButton}
                        style={{
                           border: 'none',
                           backgroundColor: `${currentTab === 'friends' ? '#eee' : '#fff'}`,
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

const mapState = state => ({
   curUser: state.user.curUser,
   userProfile: state.user.userProfile,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(ProfilePage)
