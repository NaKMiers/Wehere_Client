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

function Image({ imagePost, author }) {
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
                     <Avatar alt='avatar' src={author.avatar} />
                  </Link>
               }
               action={
                  <IconButton aria-label='settings' onClick={handleClick}>
                     <MoreIcon rotate />
                  </IconButton>
               }
               title={author.username}
               subheader={moment(imagePost.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
            />
            <Box className={styles.imageWrap}>{renderImageItem()}</Box>

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

export default Image
