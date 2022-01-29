import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function NotificationIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         cursor: 'pointer',
         color: theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-bell')} style={style} />
}

export default memo(NotificationIcon)
