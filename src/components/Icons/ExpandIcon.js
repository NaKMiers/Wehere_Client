import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { memo } from 'react'

function ExpandIcon({ rotate = false, style, color }) {
   const styles = makeStyles(theme => {
      if (color === 'secondary') {
         color = theme.palette.secondary.main
      } else if (color === 'primary') {
         color = theme.palette.primary.main
      } else color = theme.palette.primary.text
      return {
         icon: {
            fontSize: 20,
            cursor: 'pointer',
            color: color,
            transform: rotate && 'rotate(180deg)',
            transition: 'transform 0.2s ease-in-out',
         },
      }
   })()

   return <i className={clsx(styles.icon, 'fad fa-chevron-up')} style={style} />
}

export default memo(ExpandIcon)
