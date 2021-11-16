import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Chatbox from '../../components/Messenger/Chatbox'
import FriendList from '../../components/Messenger/FriendList'
import OnlineBar from '../../components/Messenger/OnlineBar'
import OnlineList from '../../components/Messenger/OnlineList'

function MessengerPage() {
   return (
      <>
         <Header />
         <Switch>
            <Route exact path='/messenger'>
               <div style={{ maxWidth: 960, margin: 'auto' }}>
                  <OnlineBar />
                  <FriendList />
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

export default MessengerPage
