import { Box, Typography } from '@material-ui/core'
import { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import Chatbox from '../../../components/Nav2/Messenger/Chatbox'
import ConversationList from '../../../components/Nav2/Messenger/ConversationList'
import OnlineBar from '../../../components/Nav2/Messenger/OnlineBar'
import OnlineList from '../../../components/Nav2/Messenger/OnlineList'
import useStyles from './styles'

function MessengerPage({ conversations }) {
   const [isHasCvs, setIsHasCvs] = useState(false)

   // change online status
   useEffect(() => {
      const changeOnlineStatus = async status => {
         try {
            await apis.changeOnlineStatus(status)
         } catch (err) {
            console.log(err)
         }
      }
      changeOnlineStatus(true)

      return () => {
         changeOnlineStatus(false)
      }
   }, [])

   useEffect(() => {
      setIsHasCvs(!!conversations.length)
   }, [conversations])

   const styles = useStyles()

   return (
      <Box className={styles.MessengerPage}>
         <Switch>
            <Route path='/messenger' exact={true}>
               <Box>
                  {isHasCvs ? (
                     conversations.length ? (
                        <Box>
                           <OnlineBar />
                           <ConversationList />
                        </Box>
                     ) : (
                        <Box className={styles.noCvsWrap}>
                           <Typography className={styles.noCvs}>
                              No conversations yet, please make friends so we can chat.
                           </Typography>
                        </Box>
                     )
                  ) : (
                     <Box className={styles.noCvsWrap}>
                        <Typography className={styles.noCvs}>
                           Please reload if you don't see anything else.
                        </Typography>
                     </Box>
                  )}
               </Box>
            </Route>
            <Route path='/messenger/onlines' exact={true}>
               <OnlineList />
            </Route>
            <Route path='/messenger/:user' exact={true}>
               <Chatbox />
            </Route>
         </Switch>
      </Box>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   conversations: state.conversation.conversationList,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(MessengerPage))
