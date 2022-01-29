import { List, ListSubheader, Typography } from '@material-ui/core'
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import FriendListItem from '../../../components/Features/FriendListItem'
import Header from '../../../components/Header'
import useStyles from './styles'

function FriendListPage({ friends, actionCreators }) {
   const styles = useStyles()

   useEffect(() => {
      const getFriends = async () => {
         try {
            const res = await apis.getFriends()
            actionCreators.setFriends(res.data)
         } catch (err) {
            console.log(err)
         }
      }
      getFriends()
   }, [actionCreators])

   const renderFriends = () => {
      if (friends.length) {
         return friends.map(f => <FriendListItem key={f._id} friend={f} />)
      }
      return (
         <Typography className={styles.noFriends}>
            You don't have any friends yet, please add new friends.
         </Typography>
      )
   }

   return (
      <>
         <Header />
         <div style={{ maxWidth: 960, padding: '6px 8px', margin: 'auto' }}>
            <List
               component='nav'
               aria-labelledby='nested-list-subheader'
               subheader={
                  <ListSubheader component='div' id='nested-list-subheader'>
                     Friend List
                  </ListSubheader>
               }
            >
               {renderFriends()}
            </List>
         </div>
      </>
   )
}

const mapState = state => ({
   friends: state.friend.friends,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(FriendListPage))
