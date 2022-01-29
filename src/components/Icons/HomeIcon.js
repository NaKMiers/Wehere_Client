import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function HomeIcon({ style, color, type }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 32,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return (
      <i
         className={clsx(styles.icon, type ? 'fad fa-home' : 'fas fa-house-damage')}
         style={style}
      />
   )
}

export default memo(HomeIcon)
