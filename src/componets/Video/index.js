import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
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
import { useState } from 'react'
import useStyles from './styles'

function Video() {
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
         <Card className={styles.card}>
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
            <iframe
               width='100%'
               height='400'
               src='https://www.youtube.com/embed/N-hhPRa_iaA'
               title='YouTube video player'
               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
               allowFullScreen
            ></iframe>
            <CardContent>
               <Typography variant='body2'>
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

export default Video
