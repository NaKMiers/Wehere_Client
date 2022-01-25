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
import ReplyIcon from '../../../components/Icons/ReplyIcon'
import SaveIcon from '../../../components/Icons/SaveIcon'
import ShareIcon from '../../../components/Icons/ShareIcon'
import Comment from '../../Comment'
import useStyles from './styles'
import { API } from '../../../constants'
import moment from 'moment'
import { connect } from 'react-redux'

function Short({ shortPost, author, curUser }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenComments, setOpenComments] = useState(false)
   const [liked, setLiked] = useState(shortPost.heart.includes(curUser._id))

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
               <IconButton aria-label='add to favorites' onClick={() => setLiked(!liked)}>
                  <HeartIcon liked={liked} />
               </IconButton>
               <IconButton aria-label='share'>
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
