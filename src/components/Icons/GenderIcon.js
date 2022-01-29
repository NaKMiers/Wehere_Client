import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function GenderIcon({ style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-venus-mars')} style={style} />
}

export default memo(GenderIcon)
