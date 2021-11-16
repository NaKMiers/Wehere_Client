import { List, ListItem, ListItemText, ListSubheader, Switch } from '@material-ui/core'
import Header from '../../components/Header'
import useStyles from './styles'

function SyncPage() {
   const styles = useStyles()

   return (
      <>
         <Header />
         <List
            style={{ maxWidth: 960, padding: 6, margin: 'auto' }}
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
      </>
   )
}

export default SyncPage
