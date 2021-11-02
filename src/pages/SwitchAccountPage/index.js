import {
   Avatar,
   Button,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader
} from '@material-ui/core'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import Header from '../../components/Header'
import useStyles from './styles'

function SwitchAccountPage() {
   const styles = useStyles()

   return (
      <>
         <Header />
         <div style={{ padding: 16 }}>
            <List
               sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
               component='nav'
               aria-labelledby='nested-list-subheader'
               subheader={
                  <ListSubheader component='div' id='nested-list-subheader'>
                     Switch Account
                  </ListSubheader>
               }
            >
               <ListItem className={styles.accountItem}>
                  <ListItemAvatar>
                     <Avatar
                        alt='avt'
                        src='https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png'
                     ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Account 1' />
                  <Button className={styles.changeAccBtn} variant='contained'>
                     <SyncAltIcon className={styles.changeAccIcon} />
                  </Button>
               </ListItem>
               <ListItem className={styles.accountItem}>
                  <ListItemAvatar>
                     <Avatar
                        alt='avt'
                        src='https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png'
                     ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Account 2' />
                  <Button className={styles.changeAccBtn} variant='contained'>
                     <SyncAltIcon className={styles.changeAccIcon} />
                  </Button>
               </ListItem>
               <ListItem className={styles.accountItem}>
                  <ListItemAvatar>
                     <Avatar
                        alt='avt'
                        src='https://i.pinimg.com/originals/eb/b0/2a/ebb02aedec9bc74f65e38311c7e14d34.png'
                     ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Account 3' />
                  <Button className={styles.changeAccBtn} variant='contained'>
                     <SyncAltIcon className={styles.changeAccIcon} />
                  </Button>
               </ListItem>
            </List>
         </div>
      </>
   )
}

export default SwitchAccountPage
