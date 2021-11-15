import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function SyncIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer'
      }
   }))()

   return <i className={clsx(styles.icon, 'fad fa-sync')} style={style} />
}

export default SyncIcon
