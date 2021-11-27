import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function SyncIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
         cursor: 'pointer',
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-sync')} style={style} />
}

export default SyncIcon
