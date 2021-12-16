import { Avatar, Badge, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../../actions'
import useStyles from './styles'

function OnlineBarItem({ friend, conversation, actionCreators }) {
   // const [onlineFriend, setOnlineFriend] = useState(null)

   const styles = useStyles()

   const handleOpenConversation = () => {
      actionCreators.setCurConversation(conversation)
   }

   return friend ? (
      <Button className={styles.userOnlineBtn} onClick={handleOpenConversation}>
         <Link to={`/messenger/${friend._id}`} className={styles.link}>
            <Avatar className={styles.avatar} src={friend.avatar} alt='avt' />
            <Badge variant='dot' color='primary' className={styles.badge} />
         </Link>
      </Button>
   ) : null
}

const mapState = state => ({
   curUser: state.user.curUser,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(OnlineBarItem)
