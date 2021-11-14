import { List } from '@material-ui/core'
import { ListSubheader } from '@mui/material'
import FriendListItem from '../FriendListItem'

function OnlineList() {
   return (
      <>
         <List
            subheader={
               <ListSubheader component='div' id='nested-list-subheader'>
                  Online friends
               </ListSubheader>
            }
         >
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
            <FriendListItem onlineList={true} />
         </List>
      </>
   )
}

export default OnlineList
