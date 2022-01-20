import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

function HeartIcon({ liked, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         color: liked ? theme.palette.danger.main : theme.favoriteIcon.main,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-heart-circle')} style={style} />
}

export default HeartIcon
