import { Box, Collapse, Menu, MenuItem } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '../../../components/Icons/DeleteIcon'
import HeartIcon from '../../../components/Icons/HeartIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
import ReplyIcon from '../../../components/Icons/ReplyIcon'
import SaveIcon from '../../../components/Icons/SaveIcon'
import ShareIcon from '../../../components/Icons/ShareIcon'
import ShareMolal from '../../../components/Features/ShareModal'
import Comment from '../../Comment'
import useStyles from './styles'
import { API } from '../../../constants'
import moment from 'moment'
import { connect } from 'react-redux'
import apis from '../../../apis'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import { memo } from 'react'

function Short({ shortPost, author, curUser, actionCreators }) {
   const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenComments, setOpenComments] = useState(false)
   const [liked, setLiked] = useState(shortPost?.hearts.includes(curUser?._id))
   const [heartCount, setHeartCount] = useState(shortPost?.hearts.length)

   const open = Boolean(anchorEl)

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = useCallback(() => {
      setAnchorEl(null)
      setOpenShareModal(false)
   }, [])

   const handleOpenComment = () => {
      setOpenComments(!isOpenComments)
   }

   const handleLikeShort = async () => {
      try {
         await apis.likeShortStatus(shortPost._id, curUser._id, !liked)
      } catch (err) {
         console.log(err)
      }
      setLiked(!liked)
      setHeartCount(!liked ? heartCount + 1 : heartCount - 1)
   }

   const handleDeleteShort = async () => {
      try {
         const res = await apis.deleteShortStatus(shortPost._id)
         actionCreators.deleteShort(res.data._id)
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
                     {moment(shortPost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
                  </span>
               }
            />
            <Box className={styles.shortWrapItem}>
               <video className={styles.shortItem} src={`${API}/${shortPost.short}`} controls />
            </Box>
            <CardActions
               disableSpacing
               className={styles.cardActions}
               style={{ bottom: `${isOpenComments ? 290 : 124}px` }}
            >
               <span className={styles.heartCount}>{heartCount}</span>
               <IconButton aria-label='add to favorites' onClick={handleLikeShort}>
                  <HeartIcon liked={liked} />
               </IconButton>
               <IconButton aria-label='share' onClick={() => setOpenShareModal(!isOpenShareModal)}>
                  <ShareIcon style={{ fontSize: 24 }} />
               </IconButton>
               <IconButton aria-label='share' onClick={handleOpenComment}>
                  <ReplyIcon style={{ fontSize: 22 }} />
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
               <MenuItem onClick={handleDeleteShort} className={styles.menuItem}>
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

export default connect(mapState, mapDispatch)(memo(Short))
