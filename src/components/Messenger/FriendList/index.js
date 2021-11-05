import { Avatar, Badge, List, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function FriendList() {
   const styles = useStyles()

   return (
      <List>
         <ListItemButton className={styles.onlineUserBtn}>
            <Link to='/messenger/user1' className={styles.link}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
               <ListItemText primary='User1' secondary='5p before' className={styles.userName} />
            </Link>
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Link to='/messenger/user1' className={styles.link}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
               <ListItemText primary='User1' secondary='5p before' className={styles.userName} />
            </Link>
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Link to='/messenger/user1' className={styles.link}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
               <ListItemText primary='User1' secondary='5p before' className={styles.userName} />
            </Link>
         </ListItemButton>
      </List>
   )
}

export default FriendList
