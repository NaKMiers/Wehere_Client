import { List, Typography } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import AuthorListItem from '../AuthorListItem'
import SongOfAuthor from '../SongOfAuthor'
import useStyles from './styles'

function AuthorList() {
   const styles = useStyles()

   return (
      <Switch>
         <Route exact path='/musics/authors'>
            <List style={{ padding: 16 }}>
               <Typography className={styles.authorCount}>Author: 32</Typography>
               <AuthorListItem />
               <AuthorListItem />
               <AuthorListItem />
               <AuthorListItem />
            </List>
         </Route>
         <Route path='/musics/authors/:authorName'>
            <SongOfAuthor />
         </Route>
      </Switch>
   )
}

export default AuthorList
