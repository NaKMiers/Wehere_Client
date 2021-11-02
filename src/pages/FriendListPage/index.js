import {
   Avatar,
   Button,
   Divider,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader
} from '@material-ui/core'
import React from 'react'
import Header from '../../components/Header'
import useStyles from './styles'

function FriendListPage() {
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
                     Friend List
                  </ListSubheader>
               }
            >
               <ListItem>
                  <ListItemAvatar>
                     <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='User1' />
                  <Button className={styles.friendBtn} variant='contained'>
                     Unfriend
                  </Button>
               </ListItem>
               <Divider light />

               <ListItem>
                  <ListItemAvatar>
                     <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='User2' />
                  <Button className={styles.friendBtn} variant='contained'>
                     Unfriend
                  </Button>
               </ListItem>
               <Divider light />

               <ListItem>
                  <ListItemAvatar>
                     <Avatar alt='avt' src='images/wehere.jpg'></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='User3' />
                  <Button className={styles.friendBtn} variant='contained'>
                     Unfriend
                  </Button>
               </ListItem>
               <Divider light />
            </List>
         </div>
      </>
   )
}

export default FriendListPage
