import {
   Avatar,
   Box,
   Button,
   Collapse,
   IconButton,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography
} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import RepeatIcon from '@material-ui/icons/Repeat'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import TransformIcon from '@material-ui/icons/Transform'
import LinearProgress from '@mui/material/LinearProgress'
import { useState } from 'react'
import Header from '../../components/Header'
import useStyles from './styles'

function MusicPage() {
   const [isShowPlayingBarCenter, setShowPlayingBarCenter] = useState(false)

   const handleShowPlayingBarCenter = () => {
      setShowPlayingBarCenter(!isShowPlayingBarCenter)
   }

   const styles = useStyles()
   return (
      <>
         <Header />
         <div style={{ padding: 16 }}>
            <List>
               <ListItem>
                  <ListItemAvatar>
                     <Avatar>
                        <AccessTimeIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Recently' secondary='22h before' />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                     <Avatar>
                        <MusicNoteIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='My Songs' secondary='216 songs' />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                     <Avatar>
                        <PlaylistPlayIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='My Playlists' secondary='3 playlists' />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                     <Avatar>
                        <PersonPinIcon />
                     </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Authors' secondary='32 authors' />
               </ListItem>
            </List>
         </div>
         <Box className={styles.playingBar}>
            <Box className={styles.playingBarTop}>
               <Box className={styles.aboutName} onClick={handleShowPlayingBarCenter}>
                  <Typography variant='body1' style={{ marginRight: 8 }}>
                     Ava Max:
                  </Typography>
                  <Typography variant='body1'>So am I</Typography>
               </Box>
               <IconButton className={styles.favoriteBtn}>
                  <FavoriteIcon />
               </IconButton>
            </Box>
            <Collapse in={isShowPlayingBarCenter} timeout='auto' unmountOnExit>
               <Box className={styles.playingBarCenter}>
                  <Typography variant='body1'>00:14</Typography>
                  <LinearProgress variant='determinate' value={20} style={{ width: '75%' }} />
                  <Typography variant='body1'>4:19</Typography>
               </Box>
            </Collapse>

            <Box className={styles.playingBarBottom}>
               <Button className={styles.menuMusicBtn}>
                  <ArrowBackIosIcon className={styles.menuMusicIcon} />
               </Button>
               <Box className={styles.audioBtnGroup}>
                  <Box>
                     <IconButton className={styles.audioBtn}>
                        <TransformIcon className={styles.audioIcon} style={{ fontSize: 32 }} />
                     </IconButton>
                     <IconButton className={styles.audioBtn}>
                        <SkipPreviousIcon className={styles.audioIcon} style={{ fontSize: 32 }} />
                     </IconButton>
                     <IconButton className={styles.audioBtn}>
                        <Avatar
                           className={styles.playBtn}
                           alt='Remy Sharp'
                           src='https://bom.to/dCLmY5'
                        >
                           <PlayArrowIcon style={{ fontSize: 32 }} />
                        </Avatar>
                     </IconButton>
                     <IconButton className={styles.audioBtn}>
                        <SkipNextIcon className={styles.audioIcon} style={{ fontSize: 32 }} />
                     </IconButton>
                     <IconButton className={styles.audioBtn}>
                        <RepeatIcon className={styles.audioIcon} style={{ fontSize: 32 }} />
                     </IconButton>
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default MusicPage
