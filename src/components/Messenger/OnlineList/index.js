import { List } from '@material-ui/core'
import { ListSubheader } from '@mui/material'
import { connect } from 'react-redux'
import ConversationItem from '../ConversationItem'

function OnlineList({ conversations }) {
   const renderOnlineFriend = () => {
      return conversations.map(c => <ConversationItem key={c._id} conversation={c} atOnlineList />)
   }

   return (
      <List
         style={{ padding: '8px 16px' }}
         subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
               Online friends
            </ListSubheader>
         }
      >
         {renderOnlineFriend()}
      </List>
   )
}

const mapState = state => ({
   conversations: state.conversation.conversationList,
})

export default connect(mapState)(OnlineList)
