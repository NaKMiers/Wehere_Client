import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Typography, Box } from '@material-ui/core'
import actions from '../../../actions'
import apis from '../../../apis'
import Header from '../../../components/Header'
import Chatbox from '../../../components/Nav2/Messenger/Chatbox'
import ConversationList from '../../../components/Nav2/Messenger/ConversationList'
import OnlineBar from '../../../components/Nav2/Messenger/OnlineBar'
import OnlineList from '../../../components/Nav2/Messenger/OnlineList'
import useStyles from './styles'

function MessengerPage({ curUser, actionCreators, conversations }) {
   useEffect(() => {
      if (curUser?._id) {
         const getConversations = async () => {
            try {
               const res = await apis.getConversation(curUser._id)
               actionCreators.setConversations(res.data)
            } catch (err) {
               console.log(err)
            }
         }
         getConversations()
      }
   }, [curUser?._id, actionCreators])

   useEffect(() => {
      const changeOnlineStatus = async status => {
         await apis.changeOnlineStatus(status)
      }
      changeOnlineStatus(true)

      return () => {
         changeOnlineStatus(false)
      }
   }, [])

   const styles = useStyles()

   return (
      <>
         <Header />
         <Switch>
            <Route exact path='/messenger'>
               <Box style={{ maxWidth: 960, margin: 'auto' }}>
                  {conversations.length ? (
                     <>
                        <OnlineBar />
                        <ConversationList />
                     </>
                  ) : (
                     <Typography className={styles.noCvs}>
                        No conversations yet, please make friends so we can chat.
                     </Typography>
                  )}
               </Box>
            </Route>
            <Route exact path='/messenger/onlines'>
               <Box style={{ maxWidth: 960, padding: '6px 8px', margin: 'auto' }}>
                  <OnlineList />
               </Box>
            </Route>
            <Route exact path='/messenger/:user'>
               <Box style={{ maxWidth: 960, margin: 'auto' }}>
                  <Chatbox />
               </Box>
            </Route>
         </Switch>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   conversations: state.conversation.conversationList,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(MessengerPage)
