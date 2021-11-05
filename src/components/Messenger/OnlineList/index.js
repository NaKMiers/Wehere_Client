import { Avatar, Badge, List, ListItemText } from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import useStyles from './styles'

function OnlineList() {
   const styles = useStyles()

   return (
      <div style={{ pading: 16 }}>
         <List>
            <ListItemButton className={styles.onlineUserBtn}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} invisible={false} />
               <ListItemText className={styles.userName} primary='User1' />
            </ListItemButton>
            <ListItemButton className={styles.onlineUserBtn}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} invisible={false} />
               <ListItemText className={styles.userName} primary='User2' />
            </ListItemButton>
            <ListItemButton className={styles.onlineUserBtn}>
               <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
               <Badge variant='dot' className={styles.badge} invisible={false} />
               <ListItemText className={styles.userName} primary='User3' />
            </ListItemButton>
         </List>
      </div>
   )
}

export default OnlineList
