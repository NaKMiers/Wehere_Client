import {
   Avatar,
   Button,
   Collapse,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
} from '@material-ui/core'
import { TextField } from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import ExpandIcon from '../../../Icons/ExpandIcon'
import SearchIcon from '../../../Icons/SearchIcon'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function ListOptionMusicPage({
   recentlyList,
   mySongList,
   myPlaylistList,
   authorList,
   actionCreators,
}) {
   const [isShowRecentlySongs, setShowRecentlySongs] = useState(true)

   const styles = useStyles()

   const renderRecentlyList = () =>
      recentlyList.map(s => <SongListItem key={s._id} song={s} inRecentlyList />)

   return (
      <List>
         <ListItem>
            <TextField
               className={styles.searchTextField}
               variant='standard'
               placeholder='Search...'
               InputProps={{ className: styles.searchInput }}
            />
            <Button className={styles.searchBtn}>
               <SearchIcon style={{ fontSize: 20 }} />
            </Button>
         </ListItem>
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
               {renderRecentlyList()}
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
               <ListItemText primary='My Songs' secondary={`${mySongList.length}: songs`} />
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
               <ListItemText
                  primary='My Playlists'
                  secondary={`${myPlaylistList.length}: playlists`}
               />
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
               <ListItemText primary='Authors' secondary={`${authorList.length}: author`} />
            </Link>
         </ListItem>
      </List>
   )
}

const mapState = state => ({
   recentlyList: state.music.recentlyList,
   mySongList: state.music.mySongList,
   myPlaylistList: state.music.myPlaylistList,
   authorList: state.music.authorList,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})
export default connect(mapState, mapDispatch)(memo(ListOptionMusicPage))
