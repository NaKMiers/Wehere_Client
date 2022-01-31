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
   Typography,
   Box,
} from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../Icons/ExpandIcon'
import ShareIcon from '../../Icons/ShareIcon'
import Comment from '../../Comment'
import DeleteIcon from '../../Icons/DeleteIcon'
import HeartIcon from '../../../components/Icons/HeartIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
import SaveIcon from '../../Icons/SaveIcon'
import ShareMolal from '../../../components/Features/ShareModal'
import useStyles from './styles'
import { API } from '../../../constants'
import moment from 'moment'
import { connect } from 'react-redux'
import apis from '../../../apis'
import { bindActionCreators } from 'redux'
import { memo } from 'react'
import actions from '../../../actions'
import { useCallback } from 'react'

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

function Image({ imagePost, author, curUser, actionCreators }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [liked, setLiked] = useState(imagePost?.hearts.includes(curUser?._id))
   const [heartCount, setHeartCount] = useState(imagePost?.hearts.length)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = useCallback(() => {
      setAnchorEl(null)
      setOpenShareModal(false)
   }, [])

   const [expanded, setExpanded] = useState(false)

   const handleExpandClick = () => {
      setExpanded(!expanded)
   }

   const styles = useStyles()

   const handleLikeImage = async () => {
      try {
         await apis.likeImageStatus(imagePost._id, curUser._id, !liked)
      } catch (err) {
         console.log(err)
      }
      setLiked(!liked)
      setHeartCount(!liked ? heartCount + 1 : heartCount - 1)
   }

   const handleDeleteImage = async () => {
      try {
         const res = await apis.deleteImageStatus(imagePost._id)
         actionCreators.deleteImage(res.data._id)
      } catch (err) {
         console.log(err)
      }
      setAnchorEl(null)
   }

   const renderImageItem = () =>
      imagePost.images.map((img, i) => (
         <CardMedia
            className={styles.imageItem}
            component='img'
            image={`${API}/${img}`}
            alt='image'
            key={i}
         />
      ))

   return (
      <>
         <Card className={styles.card}>
            <CardHeader
               avatar={
                  <Link to={`/profile/${author._id}`} className={styles.linkToProfile}>
                     <Avatar alt='avatar' src={`${API}/${author.avatar}`} />
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
                     {moment(imagePost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
                  </span>
               }
            />
            <Box className={styles.imageWrap}>{renderImageItem()}</Box>
            <CardContent>
               <Typography variant='body2'>{imagePost.statusText}</Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites' onClick={handleLikeImage}>
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
               <MenuItem onClick={handleDeleteImage} className={styles.menuItem}>
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

export default connect(mapState, mapDispatch)(memo(Image))
