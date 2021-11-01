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
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useState } from 'react'
import Header from '../../components/Header'
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
         <div style={{ padding: 16 }}>
            <List
               sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
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
                  {openChangePW ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               <Collapse className={styles.collape} in={openChangePW} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                     <form>
                        <TextField
                           name='currentPassword'
                           className={styles.textField}
                           id='filled-basic'
                           label='Current Password'
                           variant='filled'
                           value={currentPWValue}
                           onChange={e => setCurrentPWValue(e.target.value)}
                        />
                        <TextField
                           name='newPassword'
                           className={styles.textField}
                           id='filled-basic'
                           label='New Password'
                           variant='filled'
                           value={newPWValue}
                           onChange={e => setNewPWValue(e.target.value)}
                        />
                        <TextField
                           name='retypePassword'
                           className={styles.textField}
                           id='filled-basic'
                           label='Password again'
                           variant='filled'
                           value={retypePWValue}
                           onChange={e => setRetypePWValue(e.target.value)}
                        />
                     </form>
                  </List>
               </Collapse>

               <ListItem onClick={() => setOpenComments(!openComments)}>
                  <ListItemText primary='Comments' />
                  {openComments ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               <Collapse className={styles.collape} in={openComments} timeout='auto' unmountOnExit>
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
                  {openBlockFriends ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               <Collapse
                  className={styles.collape}
                  in={openBlockFriends}
                  timeout='auto'
                  unmountOnExit
               >
                  <List component='div' disablePadding>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='User1' />
                        <Switch />
                     </ListItem>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='User2' />
                        <Switch />
                     </ListItem>
                     <ListItem>
                        <ListItemAvatar>
                           <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
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
         </div>
      </>
   )
}

export default SettingPage