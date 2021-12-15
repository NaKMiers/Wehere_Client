import { List, Typography } from '@material-ui/core'
import { Routes, Route } from 'react-router-dom'
import AuthorListItem from '../AuthorListItem'
import SongOfAuthor from '../SongOfAuthor'
import useStyles from './styles'

function AuthorList() {
   const styles = useStyles()

   return (
      <Routes>
         <Route
            path='/'
            element={
               <List style={{ padding: 16 }}>
                  <Typography className={styles.authorCount}>Author: 32</Typography>
                  <AuthorListItem />
                  <AuthorListItem />
                  <AuthorListItem />
                  <AuthorListItem />
               </List>
            }
         />
         <Route path='/:authorName' element={<SongOfAuthor />} />
      </Routes>
   )
}

export default AuthorList
