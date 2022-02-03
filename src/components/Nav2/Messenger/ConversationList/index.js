import { Box, List, Typography } from '@material-ui/core'
import { memo } from 'react'
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

   return conversations.length ? (
      <List className={styles.cvsList}>{renderConversationItem()}</List>
   ) : (
      <Box className={styles.noCvsWrap}>
         <Typography className={styles.noCvs}>
            No conversations yet, please make friends so we can chat.
         </Typography>
      </Box>
   )
}

const mapState = state => ({
   conversations: state.conversation.conversationList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(ConversationList))
