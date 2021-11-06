import { Menu, MenuItem } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ReplyIcon from '@material-ui/icons/Reply'
import ShareIcon from '@material-ui/icons/Share'
import BackspaceIcon from '@material-ui/icons/Backspace'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import { useState } from 'react'
import useStyles from './styles'
import { Link } from 'react-router-dom'

function Short() {
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
         <Card className={styles.short}>
            <CardHeader
               avatar={
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar aria-label='recipe'>R</Avatar>
                  </Link>
               }
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreVertIcon />
                  </IconButton>
               }
               title='Shrimp and Chorizo Paella'
               subheader='September 14, 2016'
            />
            <CardMedia
               className={styles.cardMedia}
               component='img'
               height='194'
               image='images/short169.jpg'
               alt='Paella dish'
            />
            <CardActions disableSpacing className={styles.cardActions}>
               <IconButton aria-label='add to favorites'>
                  <FavoriteIcon className={styles.iconActions} />
               </IconButton>
               <IconButton aria-label='share'>
                  <ShareIcon className={styles.iconActions} />
               </IconButton>
               <IconButton aria-label='share'>
                  <ReplyIcon className={styles.iconActions} />
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

export default Short
