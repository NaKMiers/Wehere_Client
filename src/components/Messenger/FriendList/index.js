import { List } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import FriendListItem from '../FriendListItem'

function FriendList({ conversations }) {
   const renderFriendListItem = () =>
      conversations.map((c, i) => <FriendListItem key={i} conversation={c} />)

   return <List style={{ padding: '8.5px 24px' }}>{renderFriendListItem()}</List>
}

const mapDispatch = dispatch => ({ actionCreators: bindActionCreators(actions, dispatch) })

export default connect(null, mapDispatch)(FriendList)
