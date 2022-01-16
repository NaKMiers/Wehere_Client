import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
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
import { useState } from 'react'

function MessengerPage({ curUser, actionCreators, conversations }) {
   const [isNoCvs, setIsNoCvs] = useState(true)

   // change online status
   useEffect(() => {
      const changeOnlineStatus = async status => {
         await apis.changeOnlineStatus(status)
      }
      changeOnlineStatus(true)

      return () => {
         changeOnlineStatus(false)
      }
   }, [])

   useEffect(() => {
      if (curUser?._id) {
         const getConversations = async () => {
            try {
               const res = await apis.getConversation(curUser._id)
               setIsNoCvs(false)
               actionCreators.setConversations(res.data)
            } catch (err) {
               console.log(err)
            }
         }
         getConversations()
      }
   }, [curUser?._id, actionCreators])

   const styles = useStyles()

   return (
      <>
         <Header />
         <Switch>
            <Route path='/messenger' exact={true}>
               <Box style={{ maxWidth: 960, margin: 'auto' }}>
                  {!isNoCvs &&
                     (conversations.length ? (
                        <>
                           <OnlineBar />
                           <ConversationList />
                        </>
                     ) : (
                        <Typography className={styles.noCvs}>
                           No conversations yet, please make friends so we can chat.
                        </Typography>
                     ))}
               </Box>
            </Route>
            <Route path='/messenger/onlines' exact={true}>
               <Box style={{ maxWidth: 960, padding: '6px 8px', margin: 'auto' }}>
                  <OnlineList />
               </Box>
            </Route>
            <Route path='/messenger/:user' exact={true}>
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
