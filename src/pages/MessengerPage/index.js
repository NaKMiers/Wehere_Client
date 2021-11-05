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
               <OnlineBar />
               <FriendList />
            </Route>
            <Route exact path='/messenger/onlines'>
               <OnlineList />
            </Route>
            <Route exact path='/messenger/:user'>
               <Chatbox />
            </Route>
         </Switch>
      </>
   )
}

export default MessengerPage
