import { Avatar, Box, Button, Collapse, IconButton, Typography } from '@material-ui/core'
import LinearProgress from '@mui/material/LinearProgress'
import clsx from 'clsx'
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
               <i className={clsx(styles.audioIcon, 'fad fa-heart-circle')}></i>
            </IconButton>
         </Box>
         <Collapse in={isShowPlayingBarCenter} timeout='auto' unmountOnExit>
            <Box className={styles.playingBarCenter}>
               <Typography variant='body1'>00:14</Typography>
               <LinearProgress
                  variant='determinate'
                  value={20}
                  className={styles.processPlayingBar}
               />
               <Typography variant='body1'>4:19</Typography>
            </Box>
         </Collapse>

         <Box className={styles.playingBarBottom}>
            <Button className={styles.menuMusicBtn}>
               <Link to='/musics'>
                  <i className={clsx(styles.menuMusicIcon, 'fad fa-chevron-left')}></i>
               </Link>
            </Button>
            <Box className={styles.audioBtnGroup}>
               <Box>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-random')}></i>
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-step-backward')}></i>
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <Avatar
                        className={styles.playBtn}
                        alt='Remy Sharp'
                        src='https://bom.to/dCLmY5'
                     />
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-step-forward')}></i>
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-repeat')}></i>
                  </IconButton>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default PlayingBar
