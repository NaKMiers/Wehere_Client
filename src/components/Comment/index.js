import { Avatar, CardContent, Collapse, IconButton, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ReplyIcon from '../../components/Icons/ReplyIcon'
import HeartIcon from '../Icons/HeartIcon'
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
                     src='https://bom.to/qz55fE'
                  />
               </Link>
               <TextField
                  inputProps={{ className: styles.commentInput }}
                  className={styles.commentTextField}
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
                        src='https://bom.to/qz55fE'
                     />
                  </Link>
                  <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                     for 10 minutes.
                  </Typography>
               </div>
               <div className={styles.commentActions}>
                  <IconButton aria-label='add to favorites' size='small'>
                     <HeartIcon />
                  </IconButton>
                  <IconButton aria-label='share' size='small'>
                     <ReplyIcon className={styles.icon} />
                  </IconButton>
               </div>
               <div className={styles.replyCommentItem}>
                  <div className={styles.commentWrap}>
                     <div className={styles.commentItem}>
                        <Link to='/profile/user1' className={styles.linkToProfile}>
                           <Avatar
                              className={styles.commentAuthor}
                              alt='Remy Sharp'
                              src='https://bom.to/qz55fE'
                           />
                        </Link>
                        <Typography paragraph>
                           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                           aside for 10 minutes.
                        </Typography>
                     </div>
                     <div className={styles.commentActions}>
                        <IconButton aria-label='add to favorites' size='small'>
                           <HeartIcon />
                        </IconButton>
                     </div>
                  </div>
               </div>
               <div className={styles.replyInputWrap}>
                  <Link to='/profile/user1' className={styles.linkToProfile}>
                     <Avatar
                        className={styles.commentAuthor}
                        alt='Remy Sharp'
                        src='https://bom.to/qz55fE'
                     />
                  </Link>
                  <TextField
                     inputProps={{ className: styles.commentInput }}
                     className={styles.commentTextField}
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
                     src='https://bom.to/qz55fE'
                  />
                  <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                     for 10 minutes.
                  </Typography>
               </div>
               <div className={styles.commentActions}>
                  <IconButton aria-label='add to favorites' size='small'>
                     <HeartIcon />
                  </IconButton>
                  <IconButton aria-label='share' size='small'>
                     <ReplyIcon className={styles.icon} />
                  </IconButton>
               </div>
               <div className={styles.replyCommentItem}>
                  <div className={styles.commentWrap}>
                     <div className={styles.commentItem}>
                        <Avatar
                           className={styles.commentAuthor}
                           alt='Remy Sharp'
                           src='https://bom.to/qz55fE'
                        />
                        <Typography paragraph>
                           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                           aside for 10 minutes.
                        </Typography>
                     </div>
                     <div className={styles.commentActions}>
                        <IconButton aria-label='add to favorites' size='small'>
                           <HeartIcon />
                        </IconButton>
                     </div>
                  </div>
               </div>
               <div className={styles.replyInputWrap}>
                  <Avatar
                     className={styles.commentAuthor}
                     alt='Remy Sharp'
                     src='https://bom.to/qz55fE'
                  />
                  <TextField
                     inputProps={{ className: styles.commentInput }}
                     className={styles.commentTextField}
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
