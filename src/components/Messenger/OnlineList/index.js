import { List } from '@material-ui/core'
import FriendListItem from '../FriendListItem'

function OnlineList() {
   return (
      <div style={{ pading: 16 }}>
         <List>
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
         </List>
      </div>
   )
}

export default OnlineList
