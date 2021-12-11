import { List } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import ConversationItem from '../ConversationItem'

function ConversationList({ conversations }) {
   const renderConversationItem = () => {
      return conversations.map(c => <ConversationItem key={c._id} conversation={c} />)
   }

   return <List style={{ padding: '8.5px 24px' }}>{renderConversationItem()}</List>
}

const mapState = state => ({
   conversations: state.conversation.conversationList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(ConversationList)
