import { List, ListSubheader } from '@material-ui/core'
import AccountListItem from '../../components/AccountListItem'
import Header from '../../components/Header'

function SwitchAccountPage() {
   return (
      <>
         <Header />
         <List
            style={{ maxWidth: 960, margin: '16px auto' }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
               <ListSubheader component='div' id='nested-list-subheader'>
                  Switch Account
               </ListSubheader>
            }
         >
            <AccountListItem />
            <AccountListItem />
            <AccountListItem />
         </List>
      </>
   )
}

export default SwitchAccountPage
