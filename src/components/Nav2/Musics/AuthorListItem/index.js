import { Avatar, ListItemAvatar, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function AuthorListItem() {
   const styles = useStyles()

   return (
      <ListItemButton className={styles.authorItem} style={{ padding: '6px 16px' }}>
         <Link to='/musics/authors/ava-max' className={styles.link}>
            <ListItemAvatar>
               <Avatar className={styles.authorAvt} src='https://bom.to/ixXHXu' alt='author avt' />
            </ListItemAvatar>
            <ListItemText primary='Ava Max' secondary='Songs: 16' />
         </Link>
      </ListItemButton>
   )
}

export default AuthorListItem
