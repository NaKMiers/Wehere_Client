import { Avatar, Collapse, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../../Icons/ExpandIcon'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function ListOptionMusicPage() {
   const [isShowRecentlySongs, setShowRecentlySongs] = useState(true)

   const styles = useStyles()

   return (
      <List>
         <ListItem onClick={() => setShowRecentlySongs(!isShowRecentlySongs)}>
            <ListItemAvatar className={styles.listItemAvt}>
               <Avatar className={styles.avatar}>
                  <i className={clsx(styles.listIcon, 'fad fa-clock')} />
               </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Recently' secondary='22h before' />
            {isShowRecentlySongs ? (
               <ExpandIcon rotate={true} color='secondary' style={{ marginRight: 6 }} />
            ) : (
               <ExpandIcon color='secondary' style={{ marginRight: 6 }} />
            )}
         </ListItem>
         <Collapse in={isShowRecentlySongs} timeout='auto' unmountOnExit>
            <List className={styles.recentlyList} component='div' disablePadding>
               <SongListItem />
               <SongListItem />
               <SongListItem />
            </List>
         </Collapse>
         <ListItem>
            <Link to='/musics/songs' className={styles.link}>
               <ListItemAvatar className={styles.listItemAvt}>
                  <Avatar className={styles.avatar}>
                     <i
                        className={clsx(styles.listIcon, 'fad fa-music')}
                        style={{ fontSize: 22 }}
                     />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='My Songs' secondary='216 songs' />
            </Link>
         </ListItem>
         <ListItem>
            <Link to='/musics/playlists' className={styles.link}>
               <ListItemAvatar className={styles.listItemAvt}>
                  <Avatar className={styles.avatar}>
                     <i
                        className={clsx(styles.listIcon, 'fad fa-th-list')}
                        style={{ fontSize: 22, marginLeft: 2 }}
                     />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='My Playlists' secondary='3 playlists' />
            </Link>
         </ListItem>
         <ListItem>
            <Link to='/musics/authors' className={styles.link}>
               <ListItemAvatar className={styles.listItemAvt}>
                  <Avatar className={styles.avatar}>
                     <i
                        className={clsx(styles.listIcon, 'fad fa-user')}
                        style={{ marginLeft: 2 }}
                     />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='Authors' secondary='32 authors' />
            </Link>
         </ListItem>
      </List>
   )
}

export default ListOptionMusicPage
