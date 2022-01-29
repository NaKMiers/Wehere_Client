import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { memo } from 'react'

function HeartIcon({ liked, green, style, secondary, noborder }) {
   const styles = makeStyles(theme => ({
      icon: {
         fontSize: 26,
         color: liked
            ? green
               ? theme.palette.success.main
               : theme.palette.danger.main
            : secondary
            ? theme.palette.secondary.main
            : theme.favoriteIcon.main,
         cursor: 'pointer',
         border: !noborder && '1px solid #fff',
         borderRadius: '50%',
      },
   }))()

   return <i className={clsx(styles.icon, 'fad fa-heart-circle')} style={style} />
}

export default memo(HeartIcon)
