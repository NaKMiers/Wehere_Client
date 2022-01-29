import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function EditIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         cursor: 'pointer',
         marginLeft: 8,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-edit')} style={style} />
}

export default memo(EditIcon)
