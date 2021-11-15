import {
   Avatar,
   Button,
   Collapse,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader,
   Switch,
   TextField
} from '@material-ui/core'
import { useState } from 'react'
import Header from '../../components/Header'
import ExpandIcon from '../../components/Icons/ExpandIcon'
import useStyles from './styles'

function SettingPage() {
   const [openChangePW, setOpenChangePW] = useState(false)
   const [openComments, setOpenComments] = useState(false)
   const [openBlockFriends, setOpenBlockFriends] = useState(false)
   const [currentPWValue, setCurrentPWValue] = useState('')
   const [newPWValue, setNewPWValue] = useState('')
   const [retypePWValue, setRetypePWValue] = useState('')

   const styles = useStyles()

   return (
      <>
         <Header />
         <List
            style={{ maxWidth: 960, margin: '16px auto' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
               <ListSubheader component='div' id='nested-list-subheader'>
                  Setting
               </ListSubheader>
            }
         >
            <ListItem>
               <ListItemText primary='Dark Theme' classes={{ primary: styles.listItemText }} />
               <Switch />
            </ListItem>

            <ListItem onClick={() => setOpenChangePW(!openChangePW)}>
               <ListItemText primary='Change Password' />
               {openChangePW ? (
                  <ExpandIcon rotate color='secondary' />
               ) : (
                  <ExpandIcon color='secondary' />
               )}
            </ListItem>
            <Collapse style={{ marginLeft: 24 }} in={openChangePW} timeout='auto' unmountOnExit>
               <form>
                  <TextField
                     style={{ width: '100%' }}
                     name='currentPassword'
                     className={styles.textField}
                     id='filled-basic'
                     label='Current Password'
                     variant='filled'
                     value={currentPWValue}
                     onChange={e => setCurrentPWValue(e.target.value)}
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
                  />
               </form>
            </Collapse>

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
            <Collapse
               style={{ marginLeft: 24 }}
               in={openBlockFriends}
               timeout='auto'
               unmountOnExit
            >
               <List component='div' disablePadding>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar
                           className={styles.userAvt}
                           alt='avt'
                           src='https://bom.to/WWExNT'
                        ></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User1' />
                     <Switch />
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar
                           className={styles.userAvt}
                           alt='avt'
                           src='https://bom.to/WWExNT'
                        ></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User2' />
                     <Switch />
                  </ListItem>
                  <ListItem>
                     <ListItemAvatar>
                        <Avatar
                           className={styles.userAvt}
                           alt='avt'
                           src='https://bom.to/WWExNT'
                        ></Avatar>
                     </ListItemAvatar>
                     <ListItemText primary='User2' />
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

export default SettingPage
