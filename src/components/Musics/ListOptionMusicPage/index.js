import { Avatar, Collapse, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RecentlyItem from '../RecentlyItem'
import useStyles from './styles'

function ListOptionMusicPage() {
   const [isShowRecentlySongs, setShowRecentlySongs] = useState(true)

   const styles = useStyles()

   return (
      <List>
         <ListItem onClick={() => setShowRecentlySongs(!isShowRecentlySongs)}>
            <ListItemAvatar>
               <Avatar>
                  <AccessTimeIcon />
               </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Recently' secondary='22h before' />
            {isShowRecentlySongs ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={isShowRecentlySongs} timeout='auto' unmountOnExit>
            <List className={styles.recentlyList} component='div' disablePadding>
               <RecentlyItem />
               <RecentlyItem />
               <RecentlyItem />
            </List>
         </Collapse>

         <ListItem>
            <Link to='/musics/songs' className={styles.link}>
               <ListItemAvatar>
                  <Avatar>
                     <MusicNoteIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='My Songs' secondary='216 songs' />
            </Link>
         </ListItem>

         <ListItem>
            <Link to='/musics/playlists' className={styles.link}>
               <ListItemAvatar>
                  <Avatar>
                     <PlaylistPlayIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='My Playlists' secondary='3 playlists' />
            </Link>
         </ListItem>

         <ListItem>
            <Link to='/musics/authors' className={styles.link}>
               <ListItemAvatar>
                  <Avatar>
                     <PersonPinIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary='Authors' secondary='32 authors' />
            </Link>
         </ListItem>
      </List>
   )
}

export default ListOptionMusicPage