import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function HomeIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 32,
         cursor: 'pointer',
         color: theme.palette.primary.text
      }
   }))()

   return <i className={clsx(styles.icon, 'fas fa-house-damage')} style={style} />
}

export default HomeIcon
