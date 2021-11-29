import { Avatar, Badge, Button, ButtonGroup, List } from '@material-ui/core'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import useStyles from './styles'

function OnlineBar({ curUser, actionCreators, conversations }) {
   const [onlineFriends, setOnlineFriends] = useState([])
   console.log(conversations)

   const styles = useStyles()

   const renderUserOnline = () =>
      onlineFriends.map(onlF => (
         <Button key={onlF.username} className={styles.avatarBtn}>
            <Link to={`/messenger/${onlF._id}`} className={styles.link}>
               <Avatar className={styles.avatar} src={onlF.avatar} alt='avt' />
               <Badge variant='dot' color='primary' className={styles.badge} />
            </Link>
         </Button>
      ))

   return (
      <List className={styles.onlineBar}>
         <ButtonGroup variant='outlined' aria-label='outlined button group'>
            <Button className={styles.menuOnlineBtn}>
               <Link to='/messenger/onlines'>
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
})
const mapDispath = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispath)(OnlineBar)
