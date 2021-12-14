import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import useStyles from './styles'

function FriendListItem({ friend, actionCreators }) {
   const styles = useStyles()

   const handleUnfriend = async () => {
      try {
         const res = await apis.unfriend(friend._id)
         actionCreators.unFriend(res.data.unfriendedId)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>
         <ListItem>
            <Link className={styles.link} to={`/profile/${friend._id}`}>
               <ListItemAvatar>
                  <Avatar alt='avt' src={friend.avatar} className={styles.avatar}></Avatar>
               </ListItemAvatar>
               <ListItemText primary={friend.username} />
            </Link>
            <Button className={styles.unFriendBtn} variant='contained' onClick={handleUnfriend}>
               Unfriend
            </Button>
         </ListItem>
         <Divider light />
      </>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(FriendListItem)
