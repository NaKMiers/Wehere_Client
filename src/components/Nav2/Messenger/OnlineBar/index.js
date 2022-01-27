import { Button, ButtonGroup, List, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import apis from '../../../../apis'
import ExpandIcon from '../../../../components/Icons/ExpandIcon'
import OnlineBarItem from './OnlineBarItem'
import useStyles from './styles'

function OnlineBar({ conversations, curUser }) {
   const [friends, setFriends] = useState(null)

   const styles = useStyles()

   useEffect(() => {
      const getFriends = async () => {
         if (curUser?._id) {
            const friendList = conversations.map(c => c.members.find(m => m !== curUser._id))
            try {
               const res = await apis.getFriends(friendList)
               setFriends(res.data.filter(f => f.online))
            } catch (err) {
               console.log(err)
            }
         }
      }
      getFriends()
   }, [conversations, curUser?._id])

   const renderUserOnline = () =>
      friends.map(f => {
         let cvsIndex
         conversations.forEach((c, i) => {
            if (c.members.find(m => m !== curUser._id) === f._id) {
               cvsIndex = i
            }
         })

         return (
            <OnlineBarItem
               key={f._id}
               friend={f}
               isOnline={f.online}
               conversation={conversations[cvsIndex]}
            />
         )
      })

   console.log(friends)

   return (
      <List className={styles.onlineBar}>
         {friends &&
            (friends.length ? (
               <ButtonGroup variant='outlined' aria-label='outlined button group'>
                  <Button className={styles.menuOnlineBtn}>
                     <Link to='/messenger/onlines' className={styles.onlineListLink}>
                        <ExpandIcon color='secondary' style={{ transform: 'rotate(90deg)' }} />
                     </Link>
                  </Button>
                  {renderUserOnline()}
               </ButtonGroup>
            ) : (
               <Typography className={styles.noFriendOnline}>No friends online.</Typography>
            ))}
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
