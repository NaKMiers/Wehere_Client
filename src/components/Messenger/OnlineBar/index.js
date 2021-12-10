import { Button, ButtonGroup, List } from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import OnlineBarItem from './OnlineBarItem'
import useStyles from './styles'

function OnlineBar({ conversations }) {
   const styles = useStyles()

   const renderUserOnline = () =>
      conversations.map(c => <OnlineBarItem key={c._id} conversation={c} />)

   return (
      <List className={styles.onlineBar}>
         <ButtonGroup variant='outlined' aria-label='outlined button group'>
            <Button className={styles.menuOnlineBtn}>
               <Link to='/messenger/onlines' className={styles.onlineListLink}>
                  <ExpandIcon color='secondary' style={{ transform: 'rotate(90deg)' }} />
               </Link>
            </Button>
            {renderUserOnline()}
         </ButtonGroup>
      </List>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   conversations: state.conversation.conversationList,
})
const mapDispath = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispath)(OnlineBar)
