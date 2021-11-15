import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function LogOutIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 21,
         marginLeft: 2,
         cursor: 'pointer'
      }
   }))()

   return <i className={clsx(styles.icon, 'fad fa-sign-out-alt')} style={style} />
}

export default LogOutIcon
