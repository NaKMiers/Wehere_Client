import {
   Avatar,
   Box,
   Button,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function FriendsTab() {
   const styles = useStyles()

   return (
      <Box className={styles.tab}>
         <List>
            <ListItem className={styles.friendListItem}>
               <Link className={styles.linkFriendListItem} to='/profile/user1'>
                  <ListItemAvatar>
                     <Avatar alt='avt' src='https://bom.to/tIyuw5' />
                  </ListItemAvatar>
                  <ListItemText primary='User1' />
               </Link>
               <Button className={styles.friendBtn} variant='contained'>
                  Add Friend
               </Button>
            </ListItem>
            <ListItem className={styles.friendListItem}>
               <Link className={styles.linkFriendListItem} to='/profile/user2'>
                  <ListItemAvatar>
                     <Avatar alt='avt' src='https://bom.to/tIyuw5'></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='User2' />
               </Link>
               <Button className={styles.friendBtn} variant='contained'>
                  Add Friend
               </Button>
            </ListItem>
            <ListItem className={styles.friendListItem}>
               <Link className={styles.linkFriendListItem} to='/profile/user3'>
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
}

export default FriendsTab
