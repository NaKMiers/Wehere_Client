import {
   Box,
   Button,
   ButtonGroup,
   CardMedia,
   Divider,
   Fab,
   Menu,
   MenuItem,
   Typography,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import FriendsTab from '../../../components/Features/TabProfile/FriendsTab'
import InfoTab from '../../../components/Features/TabProfile/InfoTab'
import PostsTab from '../../../components/Features/TabProfile/PostsTab'
import Header from '../../../components/Header'
import BlockIcon from '../../../components/Icons/BlockIcon'
import CameraIcon from '../../../components/Icons/CameraIcon'
import HideUserIcon from '../../../components/Icons/HideUserIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
import SaveChange from '../../../components/Icons/SaveChange'
import useStyles from './styles'

function ProfilePage({ curUser, userProfile, actionCreators }) {
   const [isAllowAddFriends, setIsAllowAddFriends] = useState(true)
   const [justUnf, setJustUnf] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [avatar, setAvatar] = useState('')
   const [background, setBackground] = useState('')
   const [isOpenSaveAvtBtn, setIsOpenSaveAvtBtn] = useState(false)
   const [isOpenSaveBgBtn, setIsOpenSaveBgBtn] = useState(false)

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
   const history = useHistory()

   useEffect(() => {
      const userId = localtion.pathname.split('/')[2]
      actionCreators.getUserRequest(userId)
      setIsAllowAddFriends(
         () =>
            curUser?.friends.includes(userProfile?._id) ||
            curUser?.addFriendRequestList.includes(userProfile?._id)
      )
   }, [
      actionCreators,
      localtion.pathname,
      curUser?.friends,
      curUser?.addFriendRequestList,
      curUser?._id,
      userProfile?._id,
   ])

   const renderTabs = () => {
      if (currentTab === 'info') {
         return <InfoTab />
      } else if (currentTab === 'friends') {
         return <FriendsTab />
      } else {
         return <PostsTab userProfile={userProfile} />
      }
   }

   const handleAddFriendRequest = async () => {
      setIsAllowAddFriends(true)
      await apis.addFriendRequest(userProfile._id)
   }

   const handleUnfriend = async () => {
      try {
         const res = await apis.unfriend(userProfile._id)
         actionCreators.unFriend(res.data.unfriendedId)
         setAnchorEl(null)
         setIsAllowAddFriends(false)
         setJustUnf(true)
      } catch (err) {
         console.log(err)
      }
   }

   const handleOpenConversation = async () => {
      const res = await apis.getOneConversation(curUser._id, userProfile._id)
      actionCreators.setCurConversation(res.data)
      history.push(`/messenger/${userProfile._id}`)
   }

   const handleUpdateAvtAndBg = type => {
      console.log('handleImportData')
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const reader = new FileReader()
         reader.onloadend = () => {
            if (type === 'avatar') {
               setAvatar(reader.result)
               setIsOpenSaveAvtBtn(true)
            } else {
               setBackground(reader.result)
               setIsOpenSaveBgBtn(true)
            }
         }
         reader.readAsDataURL(e.target.files[0])
      }
      input.click()
   }

   const handleSaveAvtAndBg = type => {
      console.log('handleSaveAvtAndBg')
      if (type === 'avatar') {
         const updateAvatar = async () => {
            try {
               const res = await apis.updateAvatar(avatar)
               console.log('res: ', res)
               setAvatar('')
               setIsOpenSaveAvtBtn(false)
               actionCreators.changeAvatar(res.data.avatar)
            } catch (err) {
               console.log(err)
            }
         }
         updateAvatar()
      } else {
         const updateBackground = async () => {
            try {
               const res = await apis.updateBackground(background)
               console.log('res: ', res)
               setBackground('')
               setIsOpenSaveBgBtn(false)
               actionCreators.changeBackground(res.data.background)
            } catch (err) {
               console.log(err)
            }
         }
         updateBackground()
      }
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
                  image={
                     background ||
                     (curUser?._id !== userProfile?._id
                        ? userProfile?.background
                        : curUser?.background)
                  }
               />
               {curUser?._id === userProfile?._id &&
                  (!isOpenSaveBgBtn ? (
                     <Fab
                        className={styles.updateBgBtn}
                        onClick={_ => handleUpdateAvtAndBg('background')}
                     >
                        <CameraIcon color='secondary' />
                     </Fab>
                  ) : (
                     <Fab
                        className={styles.saveBgBtn}
                        onClick={_ => handleSaveAvtAndBg('background')}
                     >
                        <SaveChange />
                     </Fab>
                  ))}

               <Box className={styles.avatarWrap}>
                  <CardMedia
                     className={styles.avatar}
                     component='img'
                     image={
                        avatar ||
                        (curUser?._id !== userProfile?._id ? userProfile?.avatar : curUser?.avatar)
                     }
                  />
                  {curUser?._id === userProfile?._id &&
                     (!isOpenSaveAvtBtn ? (
                        <Fab
                           className={styles.updateAvtBtn}
                           onClick={_ => handleUpdateAvtAndBg('avatar')}
                        >
                           <CameraIcon color='secondary' />
                        </Fab>
                     ) : (
                        <Fab
                           className={styles.saveBgBtn}
                           onClick={_ => handleSaveAvtAndBg('avatar')}
                        >
                           <SaveChange />
                        </Fab>
                     ))}
               </Box>
               <Typography variant='h4' className={styles.name}>
                  {userProfile?.username}
               </Typography>

               {curUser?._id !== userProfile?._id && (
                  <Box className={styles.groupActionBtn}>
                     <Button
                        className={styles.addFriendBtn}
                        variant='contained'
                        onClick={handleAddFriendRequest}
                        disabled={isAllowAddFriends}
                     >
                        {!userProfile?.friends.includes(curUser?._id) || justUnf
                           ? 'Add friend'
                           : 'Friend'}
                     </Button>
                     <Button
                        className={styles.actionBtn}
                        variant='contained'
                        onClick={handleOpenConversation}
                     >
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
                        {userProfile?.friends.includes(curUser?._id) && !justUnf ? (
                           <MenuItem className={styles.menuActionItem} onClick={handleUnfriend}>
                              Unfriend <HideUserIcon />
                           </MenuItem>
                        ) : null}

                        <MenuItem className={styles.menuActionItem} onClick={handleClose}>
                           Block <BlockIcon style={{ marginLeft: 8 }} />
                        </MenuItem>
                     </Menu>
                  </Box>
               )}
               <Divider style={{ marginTop: 10 }} />
            </Box>
            <Box
               className={styles.bottomProfile}
               style={{ marginTop: curUser?._id === userProfile?._id && '4%' }}
            >
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
