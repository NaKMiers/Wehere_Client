import { List, ListItem, ListItemText, ListSubheader, Switch } from '@material-ui/core'
import useStyles from './styles'

function SyncPage() {
   const styles = useStyles()

   return (
      <List
         className={styles.syncPage}
         component='nav'
         aria-labelledby='nested-list-subheader'
         subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
               Sync & Backup
            </ListSubheader>
         }
      >
         <ListItem>
            <ListItemText primary='Sync' />
            <Switch />
         </ListItem>
         <ListItem>
            <ListItemText primary='Backup' />
            <Switch className={styles.switch} />
         </ListItem>
      </List>
   )
}

export default SyncPage
