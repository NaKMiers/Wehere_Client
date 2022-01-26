import { Box, Collapse, Menu, MenuItem } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '../../../components/Icons/DeleteIcon'
import HeartIcon from '../../../components/Icons/HeartIcon'
import MoreIcon from '../../../components/Icons/MoreIcon'
// import ReplyIcon from '../../../components/Icons/ReplyIcon'
import SaveIcon from '../../../components/Icons/SaveIcon'
// import ShareIcon from '../../../components/Icons/ShareIcon'
// import ShareMolal from '../../../components/Features/ShareModal'
// import Comment from '../../Comment'
import useStyles from './styles'
import { API } from '../../../constants'
import moment from 'moment'
import { connect } from 'react-redux'
import apis from '../../../apis'

function Short({ shortPost, author, curUser }) {
   // const [isOpenShareModal, setOpenShareModal] = useState(false)
   const [anchorEl, setAnchorEl] = useState(null)
   // const [isOpenComments, setOpenComments] = useState(false)
   const [isOpenComments] = useState(false)
   const [liked, setLiked] = useState(shortPost.hearts.includes(curUser._id))
   const [heartCount, setHeartCount] = useState(shortPost.hearts.length)

   const open = Boolean(anchorEl)

   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
      // setOpenShareModal(false)
   }

   // const handleOpenComment = () => {
   //    setOpenComments(!isOpenComments)
   // }

   const handleLikeShort = async () => {
      console.log('handleLikeShort')
      try {
         await apis.likeShortStatus(shortPost._id, curUser._id, !liked)
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
               subheader={moment(shortPost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
            />
            <Box className={styles.shortWrapItem}>
               <video className={styles.shortItem} src={`${API}/${shortPost.short}`} controls />
            </Box>
            <CardActions
               disableSpacing
               className={styles.cardActions}
               style={{ bottom: `${isOpenComments ? 290 : 124}px` }}
            >
               <IconButton aria-label='add to favorites' onClick={handleLikeShort}>
                  <HeartIcon liked={liked} />
                  <span className={styles.heartCount}>{heartCount}</span>
               </IconButton>
               {/* <IconButton aria-label='share' onClick={() => setOpenShareModal(!isOpenShareModal)}>
                  <ShareIcon style={{ fontSize: 24 }} />
               </IconButton> */}
               {/* <IconButton aria-label='share' onClick={handleOpenComment}>
                  <ReplyIcon style={{ fontSize: 22 }} />
               </IconButton> */}
            </CardActions>
            <Collapse
               className={styles.commentCollapse}
               in={isOpenComments}
               timeout='auto'
               unmountOnExit
            >
               {/* <Box className={styles.commentWrap}>
                  <Comment expanded={true} />
               </Box> */}
            </Collapse>
         </Card>

         {/* <ShareMolal open={isOpenShareModal} handleClose={handleClose} /> */}

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

export default connect(mapState)(Short)
