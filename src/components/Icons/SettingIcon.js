import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function SettingIcon({ mutiple, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         marginTop: 1,
         marginLeft: 1,
         cursor: 'pointer'
      }
   }))()

   return mutiple ? (
      <i className={clsx(styles.icon, 'fad fa-cogs')} style={style} />
   ) : (
      <i className={clsx(styles.icon, 'fas fa-cog')} style={style} />
   )
}

export default SettingIcon
