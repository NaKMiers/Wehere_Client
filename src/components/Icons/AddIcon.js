import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function AddIcon({ style, circle }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
      },
   }))()
   return (
      <i
         className={clsx(styles.icon, circle ? 'fad fa-plus-circle' : 'fad fa-plus')}
         style={style}
      />
   )
}

export default AddIcon
