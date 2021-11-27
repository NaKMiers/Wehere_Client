import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function LogOutIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 21,
         marginLeft: 2,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-sign-out-alt')} style={style} />
}

export default LogOutIcon
