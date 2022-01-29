import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function TrashIcon({ color, className, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 16,
         cursor: 'pointer',
         marginTop: -1,
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(className, styles.icon, 'fad fa-trash-alt')} style={style} />
}

export default memo(TrashIcon)
