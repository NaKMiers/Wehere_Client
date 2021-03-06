import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function BarIcon({ color, className, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 30,
         cursor: 'pointer',
         marginTop: -1,
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(className, styles.icon, 'fas fa-bars')} style={style} />
}

export default memo(BarIcon)
