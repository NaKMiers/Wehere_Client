import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function ShareIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 22,
         cursor: 'pointer',
         fontWeight: 100,
         color: theme.palette.primary.text
      }
   }))()
   return <i className={clsx(styles.icon, 'fad fa-share-alt')} style={style} />
}

export default ShareIcon
