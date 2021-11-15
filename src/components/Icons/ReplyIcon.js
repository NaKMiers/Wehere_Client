import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function ReplyIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 24,
         color: theme.palette.primary.text
      }
   }))()

   return <i className={clsx(styles.icon, 'fad fa-reply')} style={style} />
}

export default ReplyIcon
