import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

function CameraIcon({ color, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-camera')} style={style} />
}

export default CameraIcon
