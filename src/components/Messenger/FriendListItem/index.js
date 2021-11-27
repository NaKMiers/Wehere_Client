import { Avatar, Badge, Box, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import MoreIcon from '../../../components/Icons/MoreIcon'
import HideUserIcon from '../../Icons/HideUserIcon'
import MarkReadIcon from '../../Icons/MarkReadIcon'
import RemoveIcon from '../../Icons/RemoveIcon'
import useStyles from './styles'

function FriendListItem({ onlineList, conversation, curUser, actionCreators }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const [friend, setFriend] = useState({})

   useEffect(() => {
      const getFriend = async () => {
         if (curUser) {
            try {
               const friendId = conversation.members.find(m => m !== curUser._id)
               const res = await apis.getUser(friendId)
               setFriend(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getFriend()
   }, [conversation.members, curUser])

   const styles = useStyles()

   const handleSetCurCvs = c => {
      actionCreators.setCurConversation(c)
   }

   return (
      <>
         <ListItem className={styles.onlineUserBtn}>
            <Link
               to={`/messenger/${friend._id}`}
               className={styles.link}
               onClick={() => handleSetCurCvs(conversation)}
            >
               <Avatar className={styles.avatar} src={friend.avatar} alt='avt' />
               <Badge
                  variant='dot'
                  className={styles.badge}
                  color='primary'
                  invisible={!friend.online}
               />
               <ListItemText
                  primary={friend.username}
                  secondary='5p before'
                  className={styles.userName}
               />
            </Link>
            <Box className={styles.moreBtn} onClick={handleClick}>
               <MoreIcon rotate color='secondary' />
            </Box>
         </ListItem>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            className={styles.menu}
         >
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Hide <HideUserIcon />
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Remove <RemoveIcon />
            </MenuItem>
            {!onlineList && (
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  Mark Read <MarkReadIcon />
               </MenuItem>
            )}
         </Menu>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(FriendListItem)
