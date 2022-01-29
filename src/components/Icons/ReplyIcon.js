import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { memo } from 'react'

function ReplyIcon({ style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 23,
         color: theme.palette.primary.text,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-reply')} style={style} />
}

export default memo(ReplyIcon)
