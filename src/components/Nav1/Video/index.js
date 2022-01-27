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
   Box,
} from '@material-ui/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Comment from '../../Comment'
import DeleteIcon from '../../../components/Icons/DeleteIcon'
import SaveIcon from '../../../components/Icons/SaveIcon'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import HeartIcon from '../../../components/Icons/HeartIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
import ShareIcon from '../../../components/Icons/ShareIcon'
import ShareMolal from '../../../components/Features/ShareModal'
import useStyles from './styles'
import { API } from '../../../constants'
import { memo } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import apis from '../../../apis'

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

function Video({ videoPost, author, curUser }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [liked, setLiked] = useState(videoPost?.hearts.includes(curUser?._id))
   const [heartCount, setHeartCount] = useState(videoPost?.hearts.length)
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

   const handleLikeVideo = async () => {
      console.log('handleLikeVideo')
      try {
         await apis.likeVideoStatus(videoPost._id, curUser._id, !liked)
      } catch (err) {
         console.log(err)
      }
      setLiked(!liked)
      setHeartCount(!liked ? heartCount + 1 : heartCount - 1)
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
               subheader={moment(videoPost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
            />

            <Box className={styles.videoWrap}>
               <video className={styles.videoItem} src={`${API}/${videoPost.video}`} controls />
            </Box>

            <CardContent>
               <Typography variant='body2'>{videoPost.statusText}</Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites' onClick={handleLikeVideo}>
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

export default connect(mapState)(memo(Video))
