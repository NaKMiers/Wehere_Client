import { Box, Collapse, Menu, MenuItem } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '../../components/Icons/DeleteIcon'
import HeartIcon from '../../components/Icons/HeartIcon'
import MoreIcon from '../../components/Icons/MoreIcon'
import ReplyIcon from '../../components/Icons/ReplyIcon'
import SaveIcon from '../../components/Icons/SaveIcon'
import ShareIcon from '../../components/Icons/ShareIcon'
import Comment from '../Comment'
import useStyles from './styles'

function Short() {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenComments, setOpenComments] = useState(false)
   const open = Boolean(anchorEl)

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleOpenComment = () => {
      setOpenComments(!isOpenComments)
   }

   const styles = useStyles()

   return (
      <>
         <Card className={styles.card}>
            <CardHeader
               avatar={
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar alt='avt' src='https://bom.to/TBnSyu' />
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
            <CardMedia
               className={styles.cardMedia}
               component='img'
               height='194'
               image='images/short169.jpg'
               alt='Paella dish'
            />
            <CardActions
               disableSpacing
               className={styles.cardActions}
               style={{ bottom: `${isOpenComments ? 280 : 64}px` }}
            >
               <IconButton aria-label='add to favorites'>
                  <HeartIcon style={{ fontSize: 33 }} />
               </IconButton>
               <IconButton aria-label='share'>
                  <ShareIcon style={{ fontSize: 30 }} />
               </IconButton>
               <IconButton aria-label='share' onClick={handleOpenComment}>
                  <ReplyIcon style={{ fontSize: 28 }} />
               </IconButton>
            </CardActions>
            <Collapse
               className={styles.commentCollapse}
               in={isOpenComments}
               timeout='auto'
               unmountOnExit
            >
               <Box className={styles.commentWrap}>
                  <Comment expanded={true} />
               </Box>
            </Collapse>
         </Card>
         <Menu
            className={styles.menu}
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Delete <DeleteIcon />
            </MenuItem>
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Save <SaveIcon />
            </MenuItem>
         </Menu>
      </>
   )
}

export default Short
