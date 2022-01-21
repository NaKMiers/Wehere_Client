import { Avatar, Box, Button, Collapse, IconButton, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ExpandIcon from '../../../../components/Icons/ExpandIcon'
import HeartIcon from '../../../../components/Icons/HeartIcon'
import { API } from '../../../../constants'
import useStyles from './styles'

function PlayingBar({ songPlaying, recentlyList }) {
   const [isShowPlayingBarCenter, setShowPlayingBarCenter] = useState(false)
   const [playing, setPlaying] = useState(false)
   const [currentTime, setCurrentTime] = useState(0)
   const audioRef = useRef(new Audio(`${API}/${songPlaying?.song}`))

   const handleShowPlayingBarCenter = () => {
      setShowPlayingBarCenter(!isShowPlayingBarCenter)
   }
   const styles = useStyles()

   console.log('recentlyList: ', recentlyList)

   useEffect(() => {
      if (songPlaying?.song !== recentlyList?.[recentlyList.length - 2]?.song) {
         const audio = new Audio(`${API}/${songPlaying.song}`)
         audio.ontimeupdate = () => setCurrentTime((audio.currentTime / audio.duration) * 100)
         audio.play().catch(err => {
            console.log('err: ', err)
            audio.pause()
         })
         setPlaying(true)
         audioRef.current = audio
      }
   }, [songPlaying?.song, recentlyList])

   const handlePlayPause = () => {
      if (songPlaying?.song) {
         if (playing) {
            console.log('pause')
            audioRef.current.pause()
            setPlaying(false)
         } else {
            console.log('play')
            audioRef.current.play()
            setPlaying(true)
         }
      }
   }

   const showDuration = () => {
      const audioDuration = audioRef.current.duration
      const minute = Math.floor(audioDuration / 60) || 0
      const second = Math.floor(audioDuration - minute * 60) || 0
      return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
   }

   const showCurrentTime = () => {
      const audioCurrentTime = audioRef.current.currentTime
      const minute = Math.floor(audioCurrentTime / 60) || 0
      const second = Math.floor(audioCurrentTime - minute * 60) || 0
      return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
   }

   const handleSeek = e => {
      console.log('handleSeek')
      const valueOnProgressBar = e.target.value
      console.log('valueOnProgressBar: ', valueOnProgressBar)
      setCurrentTime(valueOnProgressBar)
      const valueOnAudioRef = (audioRef.current.duration / 100) * e.target.value
      audioRef.current.currentTime = valueOnAudioRef
   }

   return (
      <Box className={styles.playingBar}>
         {songPlaying?.song && (
            <>
               <Box className={styles.playingBarTop}>
                  <Box className={styles.aboutName} onClick={handleShowPlayingBarCenter}>
                     <Typography variant='body1' style={{ marginRight: 8 }}>
                        {songPlaying?.author}:
                     </Typography>
                     <Typography variant='body1'>{songPlaying?.songName}</Typography>
                  </Box>
                  <IconButton className={styles.favoriteBtn}>
                     <HeartIcon />
                  </IconButton>
               </Box>
               <Collapse in={isShowPlayingBarCenter} timeout='auto' unmountOnExit>
                  <Box className={styles.playingBarCenter}>
                     <Typography variant='body1'>{showCurrentTime()}</Typography>
                     <input
                        type='range'
                        className={styles.processPlayingBar}
                        onChange={handleSeek}
                        value={currentTime}
                     />
                     <Typography variant='body1'>{showDuration()}</Typography>
                  </Box>
               </Collapse>
            </>
         )}

         <Box className={styles.playingBarBottom}>
            <Button className={styles.menuMusicBtn}>
               <Link to='/musics'>
                  <ExpandIcon
                     color='primary'
                     style={{ transform: 'rotate(-90deg)', fontSize: 26 }}
                  />
               </Link>
            </Button>
            <Box className={styles.audioBtnGroup}>
               <Box>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-random')} />
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-step-backward')} />
                  </IconButton>
                  <IconButton className={styles.audioBtn} onClick={handlePlayPause}>
                     <Avatar
                        className={clsx(styles.playBtn, {
                           [styles.pause]: !songPlaying?.song || !playing,
                        })}
                        alt='Remy Sharp'
                        src={
                           songPlaying?.song
                              ? `${API}/${songPlaying?.thumb}`
                              : 'https://bom.so/zAxyke'
                        }
                     />
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-step-forward')} />
                  </IconButton>
                  <IconButton className={styles.audioBtn}>
                     <i className={clsx(styles.audioIcon, 'fad fa-repeat')} />
                  </IconButton>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

const mapState = state => ({
   songPlaying: state.music.songPlaying,
   recentlyList: state.music.recentlyList,
})

export default connect(mapState)(PlayingBar)
