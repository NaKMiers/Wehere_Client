import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function FriendIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-users')} style={style} />
}

export default memo(FriendIcon)
