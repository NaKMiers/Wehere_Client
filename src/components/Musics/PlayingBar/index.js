import { Avatar, Box, Button, Collapse, IconButton, Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import RepeatIcon from '@material-ui/icons/Repeat'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import TransformIcon from '@material-ui/icons/Transform'
import LinearProgress from '@mui/material/LinearProgress'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function PlayingBar() {
   const [isShowPlayingBarCenter, setShowPlayingBarCenter] = useState(false)

   const handleShowPlayingBarCenter = () => {
      setShowPlayingBarCenter(!isShowPlayingBarCenter)
   }
   const styles = useStyles()

   return (
      <Box className={styles.playingBar}>
         <Box className={styles.playingBarTop}>
            <Box className={styles.aboutName} onClick={handleShowPlayingBarCenter}>
               <Typography variant='body1' style={{ marginRight: 8 }}>
                  Ava Max:
               </Typography>
               <Typography variant='body1'>So Am I</Typography>
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
               <Link to='/musics'>
                  <ArrowBackIosIcon className={styles.menuMusicIcon} />
               </Link>
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
   )
}

export default PlayingBar
