import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function RemoveIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         marginLeft: 8,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-trash')} style={style} />
}

export default RemoveIcon
