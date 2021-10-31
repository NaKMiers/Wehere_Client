import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Collapse,
   IconButton,
   Menu,
   MenuItem,
   Typography
} from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ShareIcon from '@material-ui/icons/Share'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import React, { useState } from 'react'
import useStyles from './styles'

function Image() {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const styles = useStyles()
   return (
      <div style={{ padding: 16 }}>
         <Card sx={{ maxWidth: 345 }}>
            <CardHeader
               avatar={<Avatar aria-label='recipe'>R</Avatar>}
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreVertIcon />
                  </IconButton>
               }
               title='Shrimp and Chorizo Paella'
               subheader='September 14, 2016'
            />
            <CardMedia component='img' image='/images/cute4k.jpg' alt='Paella dish' />
            <CardContent>
               <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
               </IconButton>
               <IconButton aria-label='share'>
                  <ShareIcon />
               </IconButton>
            </CardActions>
         </Card>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button'
            }}
         >
            <MenuItem onClick={handleClose}>
               Delete <BackspaceIcon className={styles.menuIcon} />
            </MenuItem>
            <MenuItem onClick={handleClose}>
               Save <TurnedInIcon className={styles.menuIcon} />
            </MenuItem>
         </Menu>
      </div>
   )
}

export default Image
