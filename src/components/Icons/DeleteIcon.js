import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function DeleteIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         color: theme.palette.secondary.text,
         marginLeft: 8,
      },
   }))()
   return <i className={clsx(styles.icon, 'fad fa-backspace')} style={style} />
}

export default DeleteIcon
