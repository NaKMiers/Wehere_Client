import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

function HeartIcon({ liked, green, style }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         color: liked
            ? green
               ? theme.palette.success.main
               : theme.palette.danger.main
            : theme.favoriteIcon.main,
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-heart-circle')} style={style} />
}

export default HeartIcon
