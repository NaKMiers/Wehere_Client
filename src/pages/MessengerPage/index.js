import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import Header from '../../components/Header'
import Chatbox from '../../components/Messenger/Chatbox'
import FriendList from '../../components/Messenger/FriendList'
import OnlineBar from '../../components/Messenger/OnlineBar'
import OnlineList from '../../components/Messenger/OnlineList'

function MessengerPage({ curUser, actionCreators }) {
   const [conversations, setConversations] = useState([])

   useEffect(() => {
      if (curUser) {
         const getConversations = async () => {
            try {
               const res = await apis.getConversation(curUser._id)
               setConversations(res.data)
            } catch (err) {
               console.log(err)
            }
         }
         getConversations()
      }
   }, [curUser])

   return (
      <>
         <Header />
         <Switch>
            <Route exact path='/messenger'>
               <div style={{ maxWidth: 960, margin: 'auto' }}>
                  <OnlineBar />
                  <FriendList conversations={conversations} />
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

const mapState = state => ({ curUser: state.user.curUser })
const mapDispatch = dispatch => ({ actionCreators: bindActionCreators(actions, dispatch) })

export default connect(mapState, mapDispatch)(MessengerPage)
