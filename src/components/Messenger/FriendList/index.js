import { List } from '@material-ui/core'
import FriendListItem from '../FriendListItem'

function FriendList() {
   return (
      <List>
         <FriendListItem isOnline={true} />
         <FriendListItem isOnline={true} />
         <FriendListItem isOnline={true} />
         <FriendListItem isOnline={false} />
         <FriendListItem isOnline={false} />
      </List>
   )
}

export default FriendList
