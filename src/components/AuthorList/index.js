import { Avatar, List, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import useStyles from './styles'

function AuthorList() {
   const styles = useStyles()

   return (
      <List>
         <Typography className={styles.authorCount}>Author: 32</Typography>
         <ListItemButton className={styles.authorItem}>
            <ListItemAvatar>
               <Avatar
                  className={styles.authorAvt}
                  src='https://bom.to/ixXHXu'
                  alt='author avt'
               ></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Ava Max' secondary='Songs: 16' />
         </ListItemButton>
         <ListItemButton className={styles.authorItem}>
            <ListItemAvatar>
               <Avatar
                  className={styles.authorAvt}
                  src='https://bom.to/3VU4ZV'
                  alt='author avt'
               ></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Alan Walker' secondary='Songs: 32' />
         </ListItemButton>
         <ListItemButton className={styles.authorItem}>
            <ListItemAvatar>
               <Avatar
                  className={styles.authorAvt}
                  src='https://bom.to/cGhl8y'
                  alt='author avt'
               ></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Olly Murs' secondary='Songs: 10' />
         </ListItemButton>
      </List>
   )
}

export default AuthorList
