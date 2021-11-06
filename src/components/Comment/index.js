import {
   Avatar,
   CardContent,
   Collapse,
   IconButton,
   TextField,
   Typography
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ReplyIcon from '@material-ui/icons/Reply'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function Comment({ expanded }) {
   const styles = useStyles()

   return (
      <Collapse className={styles.collapse} in={expanded} timeout='auto' unmountOnExit>
         <CardContent className={styles.comments}>
            <div className={styles.commentInputWrap}>
               <Link to='/profile/user1' className={styles.linkToProfile}>
                  <Avatar
                     className={styles.commentAuthor}
                     alt='Remy Sharp'
                     src='/static/images/avatar/1.jpg'
                  />
               </Link>
               <TextField
                  className={styles.commentInput}
                  id='standard-basic'
                  label='Comment...'
                  variant='standard'
               />
            </div>
            <div className={styles.commentWrap}>
               <div className={styles.commentItem}>
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar
                        className={styles.commentAuthor}
                        alt='Remy Sharp'
                        src='/static/images/avatar/1.jpg'
                     />
                  </Link>
                  <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                     for 10 minutes.
                  </Typography>
               </div>
               <div className={styles.commentActions}>
                  <IconButton aria-label='add to favorites' size='small'>
                     <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share' size='small'>
                     <ReplyIcon />
                  </IconButton>
               </div>
               <div className={styles.replyCommentItem}>
                  <div className={styles.commentWrap}>
                     <div className={styles.commentItem}>
                        <Link to='/profile/user1' className={styles.linkToProfile}>
                           <Avatar
                              className={styles.commentAuthor}
                              alt='Remy Sharp'
                              src='/static/images/avatar/1.jpg'
                           />
                        </Link>
                        <Typography paragraph>
                           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                           aside for 10 minutes.
                        </Typography>
                     </div>
                     <div className={styles.commentActions}>
                        <IconButton aria-label='add to favorites' size='small'>
                           <FavoriteIcon />
                        </IconButton>
                     </div>
                  </div>
               </div>
               <div className={styles.replyInputWrap}>
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar
                        className={styles.commentAuthor}
                        alt='Remy Sharp'
                        src='/static/images/avatar/1.jpg'
                     />
                  </Link>
                  <TextField
                     className={styles.commentInput}
                     id='standard-basic'
                     label='Comment...'
                     variant='standard'
                  />
               </div>
            </div>
            <div className={styles.commentWrap}>
               <div className={styles.commentItem}>
                  <Avatar
                     className={styles.commentAuthor}
                     alt='Remy Sharp'
                     src='/static/images/avatar/1.jpg'
                  />
                  <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                     for 10 minutes.
                  </Typography>
               </div>
               <div className={styles.commentActions}>
                  <IconButton aria-label='add to favorites' size='small'>
                     <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share' size='small'>
                     <ReplyIcon />
                  </IconButton>
               </div>
               <div className={styles.replyCommentItem}>
                  <div className={styles.commentWrap}>
                     <div className={styles.commentItem}>
                        <Avatar
                           className={styles.commentAuthor}
                           alt='Remy Sharp'
                           src='/static/images/avatar/1.jpg'
                        />
                        <Typography paragraph>
                           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                           aside for 10 minutes.
                        </Typography>
                     </div>
                     <div className={styles.commentActions}>
                        <IconButton aria-label='add to favorites' size='small'>
                           <FavoriteIcon />
                        </IconButton>
                     </div>
                  </div>
               </div>
               <div className={styles.replyInputWrap}>
                  <Avatar
                     className={styles.commentAuthor}
                     alt='Remy Sharp'
                     src='/static/images/avatar/1.jpg'
                  />
                  <TextField
                     className={styles.commentInput}
                     id='standard-basic'
                     label='Comment...'
                     variant='standard'
                  />
               </div>
            </div>
         </CardContent>
      </Collapse>
   )
}

export default Comment
