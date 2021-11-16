import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

function ExpandIcon({ rotate = false, style, color }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         color: color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.text,
         transform: rotate && 'rotate(180deg)',
         transition: 'transform 0.2s ease-in-out'
      }
   }))()

   return <i className={clsx(styles.icon, 'fad fa-chevron-up')} style={style} />
}

export default ExpandIcon
