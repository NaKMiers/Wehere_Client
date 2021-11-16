import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function HideUserIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         marginLeft: 8,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-user-slash')} style={style} />
}

export default HideUserIcon
