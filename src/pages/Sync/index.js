import { List, ListItem, ListItemText, ListSubheader, Switch } from '@material-ui/core'
import Header from '../../components/Header'
import useStyles from './styles'

function SyncPage() {
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
                     Sync & Backup
                  </ListSubheader>
               }
            >
               <ListItem>
                  <ListItemText primary='Sync ' classes={{ primary: styles.listItemText }} />
                  <Switch />
               </ListItem>
               <ListItem>
                  <ListItemText primary='Backup' classes={{ primary: styles.listItemText }} />
                  <Switch />
               </ListItem>
            </List>
         </div>
      </>
   )
}

export default SyncPage
