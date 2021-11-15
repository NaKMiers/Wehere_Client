import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   IconButton,
   Menu,
   MenuItem,
   styled,
   Typography
} from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import ShareIcon from '../../components/Icons/ShareIcon'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../components/Icons/ExpandIcon'
import Comment from '../Comment'
import HeartIcon from '../Icons/HeartIcon'
import MoreIcon from '../Icons/MoreIcon'
import useStyles from './styles'

const ExpandMore = styled(props => {
   const { expand, ...other } = props
   return <IconButton {...other} />
})(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
   })
}))

function Image() {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const [expanded, setExpanded] = useState(false)

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }

   const styles = useStyles()
   return (
      <>
         <Card className={styles.card}>
            <CardHeader
               avatar={
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar alt='avt' src='https://bom.to/GBtMwW' />
                  </Link>
               }
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreIcon rotate />
                  </IconButton>
               }
               title='Shrimp and Chorizo Paella'
               subheader='September 14, 2016'
            />
            <CardMedia component='img' image='/images/cute4k.jpg' alt='Paella dish' />
            <CardContent>
               <Typography variant='body2'>
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites'>
                  <HeartIcon />
               </IconButton>
               <IconButton aria-label='share'>
                  <ShareIcon />
               </IconButton>
               <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
               >
                  <ExpandIcon style={{ marginRight: 1 }} />
               </ExpandMore>
            </CardActions>
            <Comment expanded={expanded} />
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
      </>
   )
}

export default Image
