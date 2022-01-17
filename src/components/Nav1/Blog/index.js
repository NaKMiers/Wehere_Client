import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   IconButton,
   Menu,
   MenuItem,
   styled,
   Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Comment from '../../Comment'
import DeleteIcon from '../../Icons/DeleteIcon'
import ExpandIcon from '../../Icons/ExpandIcon'
import HeartIcon from '../../Icons/HeartIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
import SaveIcon from '../../Icons/SaveIcon'
import ShareIcon from '../../Icons/ShareIcon'
import ShareMolal from '../../../components/Features/ShareModal'
import useStyles from './styles'
import { API } from '../../../constants'

const ExpandMore = styled(props => {
   const { expand, ...other } = props
   return <IconButton {...other} />
})(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
   }),
}))

function Blog({ blog, author }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
      setOpenShareModal(false)
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
            <CardContent>
               <Typography variant='body2'>{blog.statusText}</Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites'>
                  <HeartIcon />
               </IconButton>
               <IconButton aria-label='share' onClick={() => setOpenShareModal(!isOpenShareModal)}>
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
         <ShareMolal open={isOpenShareModal} handleClose={handleClose} />
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

export default Blog
