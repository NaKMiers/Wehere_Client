import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import Header from '../../../components/Header'
import Chatbox from '../../../components/Nav2/Messenger/Chatbox'
import ConversationList from '../../../components/Nav2/Messenger/ConversationList'
import OnlineBar from '../../../components/Nav2/Messenger/OnlineBar'
import OnlineList from '../../../components/Nav2/Messenger/OnlineList'

function MessengerPage({ curUser, actionCreators }) {
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

   return (
      <>
         <Header />
         <Switch>
            <Route exact path='/messenger'>
               <div style={{ maxWidth: 960, margin: 'auto' }}>
                  <OnlineBar />
                  <ConversationList />
               </div>
            </Route>
            <Route exact path='/messenger/onlines'>
               <div style={{ maxWidth: 960, padding: '6px 8px', margin: 'auto' }}>
                  <OnlineList />
               </div>
            </Route>
            <Route exact path='/messenger/:user'>
               <div style={{ maxWidth: 960, margin: 'auto' }}>
                  <Chatbox />
               </div>
            </Route>
         </Switch>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(MessengerPage)
