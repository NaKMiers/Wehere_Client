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
import ShareMolal from '../../../components/Features/ShareModal'
import MoreIcon from '../../../components/Icons/MoreIcon'
import Comment from '../../Comment'
import DeleteIcon from '../../Icons/DeleteIcon'
import ExpandIcon from '../../Icons/ExpandIcon'
import HeartIcon from '../../Icons/HeartIcon'
import SaveIcon from '../../Icons/SaveIcon'
import ShareIcon from '../../Icons/ShareIcon'
import useStyles from './styles'
import moment from 'moment'
import { connect } from 'react-redux'

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

function Blog({ blogPost, author, curUser }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [expanded, setExpanded] = useState(false)
   const [liked, setLiked] = useState(blogPost.heart.includes(curUser._id))
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
      setOpenShareModal(false)
   }

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }

   const styles = useStyles()
   return (
      <>
         <Card className={styles.card}>
            <CardHeader
               avatar={
                  <Link to={`/profile/${author._id}`} className={styles.linkToProfile}>
                     <Avatar alt='avt' src={author.avatar} />
                  </Link>
               }
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreIcon rotate />
                  </IconButton>
               }
               title={author.username}
               subheader={moment(blogPost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
            />
            <CardContent>
               <Typography variant='body2'>{blogPost.statusText}</Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites' onClick={() => setLiked(!liked)}>
                  <HeartIcon liked={liked} />
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
            {curUser?._id === author._id && (
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  Delete <DeleteIcon />
               </MenuItem>
            )}
            <MenuItem onClick={handleClose} className={styles.menuItem}>
               Save <SaveIcon />
            </MenuItem>
         </Menu>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState)(Blog)
