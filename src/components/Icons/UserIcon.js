import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function UserIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         marginLeft: 1,
         marginBottom: 1,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-user-circle')} style={style} />
}

export default memo(UserIcon)
