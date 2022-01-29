import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function SettingIcon({ mutiple, style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         marginTop: 1,
         marginLeft: 1,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return mutiple ? (
      <i className={clsx(styles.icon, 'fad fa-cogs')} style={style} />
   ) : (
      <i className={clsx(styles.icon, 'fas fa-cog')} style={style} />
   )
}

export default memo(SettingIcon)
