import { CardMedia, List } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import SongOfAuthor from '../SongOfAuthor'

function AuthorList() {
   return (
      <Switch>
         <Route path='/musics/authors' exact={true}>
            <List style={{ padding: 16 }}>
               <CardMedia component='img' image='https://bom.so/T8sqO0' alt='inage' />
            </List>
         </Route>
         <Route path='/musics/authors/:authorName' exact={true}>
            <SongOfAuthor />
         </Route>
      </Switch>
   )
}

export default AuthorList
