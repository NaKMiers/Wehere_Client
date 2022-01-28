import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import apis from '../../../../../apis'
import { API } from '../../../../../constants'
import useStyles from './styles'

function FriendsTabItem({ friend, curUser }) {
   const [justUnf, setJustUnf] = useState(false)
   const [isAllowAddFriends, setIsAllowAddFriends] = useState(true)

   const styles = useStyles()

   const handleUnfriend = async () => {
      try {
         await apis.unfriend(friend._id)
         setJustUnf(true)
      } catch (err) {
         console.log(err)
      }
   }

   const handleAddFriend = async () => {
      setIsAllowAddFriends(false)
      await apis.addFriendRequest(friend._id)
      setJustUnf(false)
   }

   return (
      <ListItem className={styles.friendListItem}>
         <Link className={styles.linkFriendListItem} to={`/profile/${friend._id}`}>
            <ListItemAvatar>
               <Avatar alt='avt' src={`${API}/${friend.avatar}`} />
            </ListItemAvatar>
            <ListItemText primary={friend.username} />
         </Link>
         <Button
            disabled={!isAllowAddFriends}
            className={styles.friendBtn}
            variant='contained'
            style={{
               background:
                  curUser.friends.includes(friend._id) &&
                  !justUnf &&
                  isAllowAddFriends &&
                  '#f44336',
            }}
            onClick={
               curUser.friends.includes(friend._id) && !justUnf ? handleUnfriend : handleAddFriend
            }
         >
            {curUser.friends.includes(friend._id) && !justUnf && isAllowAddFriends
               ? 'unfriends'
               : 'Add Friend'}
         </Button>
      </ListItem>
   )
}

export default FriendsTabItem
