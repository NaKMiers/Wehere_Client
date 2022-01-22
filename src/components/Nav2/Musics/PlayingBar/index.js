import {
   Avatar,
   Box,
   Button,
   Collapse,
   IconButton,
   LinearProgress,
   Typography,
} from '@material-ui/core'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import ExpandIcon from '../../../../components/Icons/ExpandIcon'
import HeartIcon from '../../../../components/Icons/HeartIcon'
import { API } from '../../../../constants'
import useStyles from './styles'

function PlayingBar({ songPlaying, recentlyList, mySongList, actionCreators }) {
   const [isShowPlayingBarTop, setShowPlayingBarTop] = useState(false)
   const [playing, setPlaying] = useState(false)
   const [currentTime, setCurrentTime] = useState(0)
   const audioRef = useRef(new Audio(`${API}/${songPlaying?.song}`))

   const handleShowPlayingBarCenter = () => {
      setShowPlayingBarTop(!isShowPlayingBarTop)
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
      } else {
         if (mySongList) {
            console.log('mySongList: ', mySongList)
            const randomSong = mySongList[Math.floor(Math.random() * mySongList.length)]
            console.log(randomSong)
            actionCreators.setPlayingSong(randomSong)
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
      const valueOnProgressBar = +e.target.value
      setCurrentTime(valueOnProgressBar)
      const valueOnAudioRef = (audioRef.current.duration / 100) * +e.target.value
      audioRef.current.currentTime = valueOnAudioRef
   }

   return (
      <Box className={styles.playingBar}>
         <Box className={styles.playingBarBottom}>
            <Box className={styles.subPlayBarBottom}>
               <Box className={styles.aboutNameBottom} onClick={handleShowPlayingBarCenter}>
                  <Typography variant='body1' className={styles.aboutNameBody} title='adasdas'>
                     {songPlaying?.author}: {songPlaying?.songName}
                  </Typography>
               </Box>
               <Box className={styles.audioBtnGroup}>
                  <Box>
                     <IconButton className={styles.audioBtn}>
                        <i className={clsx(styles.audioIcon, 'fad fa-random')} />
                     </IconButton>
                     <IconButton className={styles.audioBtnPrev}>
                        <i className={clsx(styles.audioIcon, 'fad fa-step-backward')} />
                     </IconButton>
                     <IconButton className={styles.audioBtnCenter} onClick={handlePlayPause}>
                        <Avatar
                           style={{ filter: songPlaying?.song && !playing && 'grayscale(0.5)' }}
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
                     <IconButton className={styles.audioBtnNext}>
                        <i className={clsx(styles.audioIcon, 'fad fa-step-forward')} />
                     </IconButton>
                     <IconButton className={styles.audioBtn}>
                        <i className={clsx(styles.audioIcon, 'fad fa-repeat')} />
                     </IconButton>
                  </Box>
               </Box>
               <Box className={styles.timeStateBottom} onClick={handleShowPlayingBarCenter}>
                  <Typography variant='body1'>
                     {showCurrentTime()}/{showDuration()}
                  </Typography>
                  <IconButton className={styles.favoriteBtnBottom}>
                     <HeartIcon />
                  </IconButton>
               </Box>
            </Box>
            <Box className={styles.processPlayingBarWrap}>
               <input
                  type='range'
                  className={styles.processPlayingBar}
                  onChange={handleSeek}
                  value={currentTime}
               />
            </Box>
            {playing && (
               <LinearProgress
                  variant='determinate'
                  value={currentTime}
                  className={styles.processPlayingBarBottom}
               />
            )}
         </Box>
         {songPlaying?.song && (
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
         )}
      </Box>
   )
}

const mapState = state => ({
   songPlaying: state.music.songPlaying,
   recentlyList: state.music.recentlyList,
   mySongList: state.music.mySongList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(PlayingBar)
