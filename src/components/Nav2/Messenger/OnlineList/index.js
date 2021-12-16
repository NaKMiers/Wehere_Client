import { List, Typography } from '@material-ui/core'
import { ListSubheader } from '@mui/material'
import { connect } from 'react-redux'
import ConversationItem from '../ConversationItem'
import { useEffect } from 'react'
import apis from '../../../../apis'
import { useState } from 'react'
import useStyles from './styles'

function OnlineList({ conversations, curUser }) {
   const [friends, setFriends] = useState(null)

   const styles = useStyles()

   useEffect(() => {
      const getFriends = async () => {
         if (curUser?._id) {
            const friendList = conversations.map(c => c.members.find(m => m !== curUser._id))
            try {
               const res = await apis.getFriends(friendList)
               setFriends(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getFriends()
   }, [conversations, curUser?._id])

   const renderOnlineFriend = () =>
      friends.map(f => {
         let cvsIndex
         conversations.forEach((c, i) => {
            if (c.members.find(m => m !== curUser._id) === f._id) {
               cvsIndex = i
            }
         })
         console.log(cvsIndex)

         return (
            <ConversationItem
               key={f._id}
               friend={f}
               atOnlineList
               conversation={conversations[cvsIndex]}
            />
         )
      })

   return (
      friends &&
      (friends.length ? (
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
      ) : (
         <Typography className={styles.noFriendOnline}>No friends online.</Typography>
      ))
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   conversations: state.conversation.conversationList,
})

export default connect(mapState)(OnlineList)
