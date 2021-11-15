import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function UserIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         marginLeft: 1,
         marginBottom: 1,
         cursor: 'pointer'
      }
   }))()

   return <i className={clsx(styles.icon, 'fad fa-user-circle')} style={style} />
}

export default UserIcon
