import {
   Avatar,
   Button,
   Collapse,
   Grid,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader,
   Switch,
   TextField,
} from '@material-ui/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import useStyles from './styles'
import themeList from '../../../commons/ThemeList'
import { connect } from 'react-redux'
import actions from '../../../actions'
import { bindActionCreators } from 'redux'
import apis from '../../../apis'

function SettingPage({ curUser, actionCreators }) {
   const [openTheme, setOpenTheme] = useState(false)
   const [openChangePW, setOpenChangePW] = useState(false)
   const [openComments, setOpenComments] = useState(false)
   const [openBlockFriends, setOpenBlockFriends] = useState(false)

   const [currentPWValue, setCurrentPWValue] = useState('')
   const [newPWValue, setNewPWValue] = useState('')
   const [retypePWValue, setRetypePWValue] = useState('')

   const [errorCurPW, setErrorCurPW] = useState('')
   const [errorNewPw, setErrorNewPw] = useState('')
   const [errorRetypePW, setErrorRetypePW] = useState('')

   const styles = useStyles()

   const handleChangeTheme = themeIndex => {
      actionCreators.changeThemeRequest({ themeIndex })
   }

   const handleValidate = type => {
      console.log('type: ', type)
      switch (type) {
         case 'curPassword':
            if (!currentPWValue.trim().length) {
               setErrorCurPW('Current password is empty.')
            } else {
            }

            break
         case 'newPassword':
            if (!newPWValue.trim().length) {
               setErrorNewPw('Current password is empty.')
            } else if (newPWValue.trim().length < 6) {
               setErrorNewPw('Password must be at least 6 characters.')
            }
            break
         case 'retypePassword':
            if (!retypePWValue.trim().length) {
               setErrorRetypePW('Current password is empty.')
            } else if (newPWValue.trim() !== retypePWValue.trim()) {
               setErrorRetypePW('Password does not match.')
            }
            break
         default:
            return
      }
   }

   const handleChangePassword = async e => {
      e.preventDefault()
      if (
         !errorCurPW &&
         !errorNewPw &&
         !errorRetypePW &&
         currentPWValue.trim() &&
         newPWValue.trim() &&
         retypePWValue.trim()
      ) {
         try {
            let res = await apis.changePassword(currentPWValue.trim(), newPWValue.trim())
            console.log('res: ', res)
            if (res.data.isChangePasswordSuccess) {
               setOpenChangePW(false)
            } else {
               setErrorCurPW('Wrong password, please enter again.')
            }
         } catch (err) {
            console.log(err)
         }
      }
   }

   return (
      <>
         <Header />
         <List
            style={{ maxWidth: 960, padding: 6, margin: 'auto' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
               <ListSubheader component='div' id='nested-list-subheader'>
                  Setting
               </ListSubheader>
            }
         >
            <ListItem onClick={() => setOpenTheme(!openTheme)}>
               <ListItemText primary='Theme' />
               {openTheme ? (
                  <ExpandIcon rotate color='secondary' />
               ) : (
                  <ExpandIcon color='secondary' />
               )}
            </ListItem>
            <Collapse style={{ marginLeft: 24 }} in={openTheme} timeout='auto' unmountOnExit>
               <Grid className={styles.themeList} container>
                  {themeList.map((item, i) => (
                     <Grid className={styles.themeItem} key={i} item xs={3} md={2}>
                        <Button
                           onClick={() => handleChangeTheme(i)}
                           className={styles.themeBtn}
                           style={{
                              background: item.gradient,
                              color: item.primaryText,
                              textShadow: `0px 0px 2px ${item.secondaryText}`,
                           }}
                        >
                           {item.title}
                        </Button>
                     </Grid>
                  ))}
               </Grid>
            </Collapse>

            {curUser?.authType === 'local' && (
               <>
                  <ListItem onClick={() => setOpenChangePW(!openChangePW)}>
                     <ListItemText primary='Change Password' />
                     {openChangePW ? (
                        <ExpandIcon rotate color='secondary' />
                     ) : (
                        <ExpandIcon color='secondary' />
                     )}
                  </ListItem>
                  <Collapse
                     style={{ marginLeft: 24 }}
                     in={openChangePW}
                     timeout='auto'
                     unmountOnExit
                  >
                     <form onSubmit={handleChangePassword}>
                        <TextField
                           style={{ width: '100%' }}
                           name='currentPassword'
                           className={styles.textField}
                           id='filled-basic'
                           label='Current Password'
                           variant='filled'
                           value={currentPWValue}
                           onChange={e => setCurrentPWValue(e.target.value)}
                           onFocus={() => setErrorCurPW('')}
                           onBlur={() => handleValidate('curPassword')}
                           error={!!errorCurPW}
                           helperText={errorCurPW}
                        />
                        <TextField
                           style={{ width: '100%' }}
                           name='newPassword'
                           type='password'
                           className={styles.textField}
                           id='filled-basic'
                           label='New Password'
                           variant='filled'
                           value={newPWValue}
                           onChange={e => setNewPWValue(e.target.value)}
                           onFocus={() => setErrorNewPw('')}
                           onBlur={() => handleValidate('newPassword')}
                           error={!!errorNewPw}
                           helperText={errorNewPw}
                        />
                        <TextField
                           style={{ width: '100%' }}
                           name='retypePassword'
                           type='password'
                           className={styles.textField}
                           id='filled-basic'
                           label='Password again'
                           variant='filled'
                           value={retypePWValue}
                           onChange={e => setRetypePWValue(e.target.value)}
                           onFocus={() => setErrorRetypePW('')}
                           onBlur={() => handleValidate('retypePassword')}
                           error={!!errorRetypePW}
                           helperText={errorRetypePW}
                        />
                        <Button type='submit' className={styles.changePWBtn}>
                           Save
                        </Button>
                     </form>
                  </Collapse>
               </>
            )}

            <ListItem onClick={() => setOpenComments(!openComments)}>
               <ListItemText primary='Comments' />
               {openComments ? (
                  <ExpandIcon rotate color='secondary' />
               ) : (
                  <ExpandIcon color='secondary' />
               )}
            </ListItem>
            <Collapse style={{ marginLeft: 24 }} in={openComments} timeout='auto' unmountOnExit>
               <List component='div' disablePadding>
                  <ListItem sx={{ pl: 4 }}>
                     <ListItemText
                        primary='Lock Comments'
                        classes={{ primary: styles.listItemText }}
                     />
                     <Switch />
                  </ListItem>
               </List>
            </Collapse>

            <ListItem onClick={() => setOpenBlockFriends(!openBlockFriends)}>
               <ListItemText primary='Block Friends' />
               {openBlockFriends ? (
                  <ExpandIcon rotate color='secondary' />
               ) : (
                  <ExpandIcon color='secondary' />
               )}
            </ListItem>
            <Collapse style={{ marginLeft: 24 }} in={openBlockFriends} timeout='auto' unmountOnExit>
               <List component='div' disablePadding>
                  <ListItem className={styles.listBlockFrItem}>
                     <Link to='/profile/user1' className={styles.linkBlockFriend}>
                        <ListItemAvatar>
                           <Avatar
                              className={styles.userAvt}
                              alt='avt'
                              src='https://bom.to/WWExNT'
                           />
                        </ListItemAvatar>
                        <ListItemText primary='User1' />
                     </Link>
                     <Switch />
                  </ListItem>
                  <ListItem className={styles.listBlockFrItem}>
                     <Link to='/profile/user1' className={styles.linkBlockFriend}>
                        <ListItemAvatar>
                           <Avatar
                              className={styles.userAvt}
                              alt='avt'
                              src='https://bom.to/WWExNT'
                           />
                        </ListItemAvatar>
                        <ListItemText primary='User1' />
                     </Link>
                     <Switch />
                  </ListItem>
                  <ListItem className={styles.listBlockFrItem}>
                     <Link to='/profile/user1' className={styles.linkBlockFriend}>
                        <ListItemAvatar>
                           <Avatar
                              className={styles.userAvt}
                              alt='avt'
                              src='https://bom.to/WWExNT'
                           />
                        </ListItemAvatar>
                        <ListItemText primary='User1' />
                     </Link>
                     <Switch />
                  </ListItem>
               </List>
            </Collapse>

            <ListItem>
               <Button className={styles.deleteAccountItem}>
                  <ListItemText primary='Delete Account' />
               </Button>
            </ListItem>
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
export default connect(mapState, mapDispatch)(SettingPage)
