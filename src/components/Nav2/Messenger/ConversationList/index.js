import { List } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import ConversationItem from '../ConversationItem'
import useStyles from './styles'

function ConversationList({ conversations }) {
   const styles = useStyles()
   const renderConversationItem = () => {
      return conversations.map(c => <ConversationItem key={c._id} conversation={c} />)
   }

   return <List className={styles.cvsList}>{renderConversationItem()}</List>
}

const mapState = state => ({
   conversations: state.conversation.conversationList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(ConversationList)
