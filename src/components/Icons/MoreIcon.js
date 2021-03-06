import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { memo } from 'react'

function MoreIcon({ rotate = false, color, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
         transform: rotate && 'rotate(90deg)',
         cursor: 'pointer',
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-ellipsis-h')} style={style} />
}

export default memo(MoreIcon)
