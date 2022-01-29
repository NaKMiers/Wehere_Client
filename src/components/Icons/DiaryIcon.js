import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function DiaryIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 20,
         marginLeft: 1,
         marginTop: 1,
         cursor: 'pointer',
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-book-open')} style={style} />
}

export default memo(DiaryIcon)
