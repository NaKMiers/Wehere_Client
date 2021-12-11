import { Avatar, Badge, Button } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../../actions'
import apis from '../../../../../apis'
import useStyles from './styles'

function OnlineBarItem({ curUser, conversation, actionCreators }) {
   const [onlineFriend, setOnlineFriend] = useState(null)

   const styles = useStyles()

   useEffect(() => {
      const getFriend = async () => {
         if (curUser) {
            try {
               const friendId = conversation.members.find(m => m !== curUser._id)
               const res = await apis.getUser(friendId)
               setOnlineFriend(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getFriend()
   }, [curUser, conversation.members])

   const handleOpenConversation = () => {
      actionCreators.setCurConversation(conversation)
   }

   return onlineFriend?.online ? (
      <Button className={styles.userOnlineBtn} onClick={handleOpenConversation}>
         <Link to={`/messenger/${onlineFriend?._id}`} className={styles.link}>
            <Avatar className={styles.avatar} src={onlineFriend?.avatar} alt='avt' />
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
