import { List, ListSubheader } from '@material-ui/core'
import React from 'react'
import FriendListItem from '../../components/FriendListItem'
import Header from '../../components/Header'

function FriendListPage() {
   return (
      <>
         <Header />
         <div style={{ padding: 16 }}>
            <List
               component='nav'
               aria-labelledby='nested-list-subheader'
               subheader={
                  <ListSubheader component='div' id='nested-list-subheader'>
                     Friend List
                  </ListSubheader>
               }
            >
               <FriendListItem />
               <FriendListItem />
               <FriendListItem />
            </List>
         </div>
      </>
   )
}

export default FriendListPage
