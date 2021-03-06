import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function In4Icon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 22,
         marginLeft: 1,
         marginBottom: 1,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-info')} style={style} />
}

export default memo(In4Icon)
