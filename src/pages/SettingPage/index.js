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
import Header from '../../components/Header'
import ExpandIcon from '../../components/Icons/ExpandIcon'
import useStyles from './styles'

const itemData = [
   {
      theme: 'linear-gradient(45deg, #db03e4, #35afff)',
      main: '#db03e4',
      secondary: '#35afff',
      text: '#fff',
      name: 'Default',
   },
   {
      theme: 'linear-gradient(45deg, #ee9ca7, #ffdde1)',
      main: '#ee9ca7',
      secondary: '#ffdde1',
      text: '#fff',
      name: 'Piggy Pink',
   },
   {
      theme: 'linear-gradient(45deg, #c6ffdd, #fbd786, #f7797d)',
      main: '#c6ffdd',
      secondary: '#f7797d',
      text: '#fff',
      name: 'MegaTron',
   },
   {
      theme: 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)',
      main: '#12c2e9',
      secondary: '#f64f59',
      text: '#fff',
      name: 'JShine',
   },
   {
      theme: 'linear-gradient(45deg, #b92b27, #1565c0)',
      main: '#b92b27',
      secondary: '#1565c0',
      text: '#fff',
      name: 'Evening Sunshine',
   },
   {
      theme: 'linear-gradient(45deg, #aa4b6b, #6b6b83, #3b8d99)',
      main: '#aa4b6b',
      secondary: '#3b8d99',
      text: '#fff',
      name: 'Memariani',
   },
   {
      theme: 'linear-gradient(45deg, #c31432, #240b36)',
      main: '#c31432',
      secondary: '#240b36',
      text: '#fff',
      name: 'Witching Hour',
   },
   {
      theme: 'linear-gradient(45deg, #f12711, #f5af19)',
      main: '#f12711',
      secondary: '#f5af19',
      text: '#fff',
      name: 'Flare',
   },
   {
      theme: 'linear-gradient(45deg, #659999, #f4791f)',
      main: '#659999',
      secondary: '#f4791f',
      text: '#fff',
      name: 'Metapolis',
   },
   {
      theme: 'linear-gradient(45deg, #dd3e54, #6be585)',
      main: '#dd3e54',
      secondary: '#6be585',
      text: '#fff',
      name: 'Kyoo Pal',
   },
   {
      theme: 'linear-gradient(45deg, #654ea3, #eaafc8)',
      main: '#654ea3',
      secondary: '#eaafc8',
      text: '#fff',
      name: 'Ultra Voilet',
   },
   {
      theme: 'linear-gradient(45deg, #e48003, #35cbff)',
      main: '#e48003',
      secondary: '#35cbff',
      text: '#fff',
      name: 'Burning Orange',
   },
   {
      theme: 'linear-gradient(45deg, #8a2387, #e94057, #f27121)',
      main: '#8a2387',
      secondary: '#f27121',
      text: '#fff',
      name: 'Wiretap',
   },
   {
      theme: 'linear-gradient(45deg, #1e9600, #fff200, #ff0000)',
      main: '#1e9600',
      secondary: '#ff0000',
      text: '#fff',
      name: 'Rastafari',
   },
   {
      theme: 'linear-gradient(45deg, #ed213a, #93291e)',
      main: '#ed213a',
      secondary: '#93291e',
      text: '#fff',
      name: 'Sin City Red',
   },
   {
      theme: 'linear-gradient(45deg, #fdc830, #f37335)',
      main: '#fdc830',
      secondary: '#f37335',
      text: '#fff',
      name: 'Citrus Peel',
   },
   {
      theme: 'linear-gradient(45deg, #da4453, #89216b)',
      main: '#da4453',
      secondary: '#89216b',
      text: '#fff',
      name: 'Vanusa',
   },
   {
      theme: 'linear-gradient(45deg, #333333, #dd1818)',
      main: '#333333',
      secondary: '#dd1818',
      text: '#fff',
      name: 'Pure Lust',
   },
   {
      theme: 'linear-gradient(45deg, #355c7d, #6c5b7b, #c06c84)',
      main: '#355c7d',
      secondary: '#c06c84',
      text: '#fff',
      name: 'Red Sunset',
   },
   {
      theme: 'linear-gradient(45deg, #bc4e9c, #f80759)',
      main: '#bc4e9c',
      secondary: '#f80759',
      text: '#fff',
      name: 'Shifter',
   },
   {
      theme: 'linear-gradient(45deg, #108dc7, #ef8e38)',
      main: '#108dc7',
      secondary: '#ef8e38',
      text: '#fff',
      name: 'Pun Yeta',
   },
   {
      theme: 'linear-gradient(45deg, #23074d, #cc5333)',
      main: '#23074d',
      secondary: '#cc5333',
      text: '#fff',
      name: 'Taran tado',
   },
   {
      theme: 'linear-gradient(45deg, #fc4a1a, #f7b733)',
      main: '#fc4a1a',
      secondary: '#f7b733',
      text: '#fff',
      name: 'Orange Fun',
   },
   {
      theme: 'linear-gradient(45deg, #642b73, #c6426e)',
      main: '#642b73',
      secondary: '#c6426e',
      text: '#fff',
      name: 'Crimson Tide',
   },
]

function SettingPage() {
   const [openTheme, setOpenTheme] = useState(false)
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
               {/* <ListItem>
                  <ListItemText primary='Dark Theme' />
                  <Switch />
               </ListItem> */}
               <Grid className={styles.themeList} container>
                  {itemData.map((item, i) => (
                     <Grid className={styles.themeItem} key={i} item xs={3} md={2}>
                        <Button
                           className={styles.themeBtn}
                           style={{ background: item.theme, color: item.text }}
                        >
                           {item.name}
                        </Button>
                     </Grid>
                  ))}
               </Grid>
            </Collapse>

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

export default SettingPage
