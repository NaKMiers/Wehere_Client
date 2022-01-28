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
import apis from '../../../apis'
import { API } from '../../../constants'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import { memo } from 'react'

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

function Blog({ blogPost, author, curUser, actionCreators }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [expanded, setExpanded] = useState(false)
   const [liked, setLiked] = useState(blogPost?.hearts.includes(curUser?._id))
   const [heartCount, setHeartCount] = useState(blogPost?.hearts.length)
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

   const handleLikeBlog = async () => {
      console.log('handleLikeBlog')
      try {
         await apis.likeBlogStatus(blogPost._id, curUser._id, !liked)
      } catch (err) {
         console.log(err)
      }
      setLiked(!liked)
      setHeartCount(!liked ? heartCount + 1 : heartCount - 1)
   }

   const handleDeleteBlog = async () => {
      console.log('handleDeleteBlog')

      try {
         const res = await apis.deleteBlogStatus(blogPost._id)
         console.log('res-deleteBlog: ', res.data)
         actionCreators.deleteBlog(res.data._id)
      } catch (err) {
         console.log(err)
      }
      setAnchorEl(null)
   }

   const styles = useStyles()
   return (
      <>
         <Card className={styles.card}>
            <CardHeader
               avatar={
                  <Link to={`/profile/${author._id}`} className={styles.linkToProfile}>
                     <Avatar alt='avt' src={`${API}/${author.avatar}`} />
                  </Link>
               }
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreIcon rotate />
                  </IconButton>
               }
               title={author.username}
               subheader={
                  <span className={styles.subheader}>
                     {moment(blogPost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
                  </span>
               }
            />
            <CardContent>
               <Typography variant='body2' className={styles.statusText}>
                  {blogPost.statusText}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites' onClick={handleLikeBlog}>
                  <HeartIcon liked={liked} />
                  <span className={styles.heartCount}>{heartCount}</span>
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
               <MenuItem onClick={handleDeleteBlog} className={styles.menuItem}>
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

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(Blog))
