import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function UploadIcon({ color, className, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 16,
         cursor: 'pointer',
         marginTop: -1,
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(className, styles.icon, 'fad fa-upload')} style={style} />
}

export default memo(UploadIcon)
