import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function HelpAndSupportIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
         fontSize: 20,
         cursor: 'pointer',
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-question')} style={style} />
}

export default memo(HelpAndSupportIcon)
