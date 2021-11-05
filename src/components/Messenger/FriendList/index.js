import { Avatar, Badge, List, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import useStyles from './styles'

function FriendList() {
   const styles = useStyles()

   return (
      <List>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User1' secondary='5p before' className={styles.userName} />
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User2' secondary='5p before' className={styles.userName} />
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User3' secondary='5p before' className={styles.userName} />
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User4' secondary='5p before' className={styles.userName} />
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User5' secondary='5p before' className={styles.userName} />
         </ListItemButton>
         <ListItemButton className={styles.onlineUserBtn}>
            <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
            <Badge variant='dot' className={styles.badge} color='primary' invisible={false} />
            <ListItemText primary='User6' secondary='5p before' className={styles.userName} />
         </ListItemButton>
      </List>
   )
}

export default FriendList
