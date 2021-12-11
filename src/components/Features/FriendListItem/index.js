import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function FriendListItem() {
   const styles = useStyles()

   return (
      <>
         <ListItem>
            <Link className={styles.link} to='/profile/user1'>
               <ListItemAvatar>
                  <Avatar alt='avt' src='https://bom.to/lxfSeT' className={styles.avatar}></Avatar>
               </ListItemAvatar>
               <ListItemText primary='User1' />
            </Link>
            <Button className={styles.friendBtn} variant='contained'>
               Unfriend
            </Button>
         </ListItem>
         <Divider light />
      </>
   )
}

export default FriendListItem
