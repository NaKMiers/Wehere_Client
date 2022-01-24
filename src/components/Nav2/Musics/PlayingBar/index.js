import { Avatar, Box, IconButton, LinearProgress, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { useEffect, useRef, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../../actions'
import HeartIcon from '../../../../components/Icons/HeartIcon'
import { API } from '../../../../constants'
import useStyles from './styles'

function PlayingBar({
   songPlaying,
   recentlyList,
   mySongList,
   playlistPlaying,
   randomSongList,
   actionCreators,
}) {
   const [isShowPlayingBarTop, setShowPlayingBarTop] = useState(false)
   const [playing, setPlaying] = useState(true)
   const [currentTime, setCurrentTime] = useState(0)
   const audioRef = useRef(null)
   const currentUrl = useLocation().pathname
   const isShowPlayingBar = ['/login', '/register', 'restore-password', '/messenger'].some(url =>
      currentUrl.startsWith(url)
   )
   const [repeat, setRepeat] = useState(false)
   const [random, setRandom] = useState(false)

   const handleShowPlayingBarCenter = () => {
      setShowPlayingBarTop(!isShowPlayingBarTop)
   }
   const styles = useStyles()

   const handlePlayPause = () => {
      if (songPlaying?.song) {
         if (playing) {
            audioRef.current.pause()
            setPlaying(false)
         } else {
            audioRef.current.play()
            setPlaying(true)
         }
      } else {
         // play random music in mySongList if songPlay is not exist
         if (mySongList) {
            const randomSong = mySongList[Math.floor(Math.random() * mySongList.length)]
            actionCreators.setPlayingSong(randomSong)
            actionCreators.setRecentlyList(randomSong)
            actionCreators.setPlayingAt('mySongList')
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

   const handleRepeat = () => {
      console.log('handleRepeat')
      setRepeat(!repeat)
      audioRef.current.loop = !repeat
   }
   const handleRandom = () => {
      console.log('handleRandom')
      // if (!random) {
      //    const randomSongList = makeRandomList(
      //       !playlistPlaying.length ? mySongList : playlistPlaying
      //    )
      //    actionCreators.setRandomSongList(randomSongList)
      // }
      setRandom(!random)
   }

   const handleNextSong = useCallback(() => {
      console.log('handleNextSong')
      let index
      let nextSong
      if (!random) {
         if (!playlistPlaying.length) {
            console.log('listening in mySongList')
            index = findIndexSong(mySongList, songPlaying._id)
            nextSong = mySongList[index + 1] || mySongList[0]
         } else {
            console.log('listening in playlist')
            index = findIndexSong(playlistPlaying, songPlaying._id)
            nextSong = playlistPlaying[index + 1] || playlistPlaying[0]
         }
      } else {
         console.log('listening in randomSongList')
         index = findIndexSong(randomSongList, songPlaying._id)
         nextSong = randomSongList[index + 1] || randomSongList[0]
      }
      actionCreators.setPlayingSong(nextSong)
      actionCreators.setRecentlyList(nextSong)
   }, [actionCreators, mySongList, songPlaying._id, playlistPlaying, random, randomSongList])
   const handlePrevSong = () => {
      console.log('handlePrevSong')
      let index
      let prevSong
      if (!random) {
         if (!playlistPlaying.length) {
            console.log('listening in mySongList')
            index = findIndexSong(mySongList, songPlaying._id)
            prevSong = mySongList[index - 1] || mySongList[mySongList.length - 1]
         } else {
            console.log('listening in playlist')
            index = findIndexSong(playlistPlaying, songPlaying._id)
            prevSong = playlistPlaying[index - 1] || playlistPlaying[playlistPlaying.length - 1]
         }
      } else {
         console.log('listening in randomSongList')
         index = findIndexSong(randomSongList, songPlaying._id)
         prevSong = randomSongList[index - 1] || randomSongList[randomSongList.length - 1]
      }
      actionCreators.setPlayingSong(prevSong)
      actionCreators.setRecentlyList(prevSong)
   }
   const findIndexSong = (list, songId) => {
      let index = -1
      list.forEach((s, i) => {
         if (s._id === songId) {
            index = i
         }
      })
      return index
   }

   useEffect(() => {
      if (songPlaying?.song !== recentlyList?.[recentlyList.length - 2]?.song) {
         audioRef.current.ontimeupdate = () =>
            setCurrentTime((audioRef.current.currentTime / audioRef.current.duration) * 100)
         audioRef.current.onended = () => {
            console.log('ended')
            if (!repeat) {
               handleNextSong()
            }
         }
         audioRef.current.play().catch(err => {
            console.log('err: ', err)
            audioRef.current.pause()
         })
         setPlaying(true)
      }
   }, [songPlaying?.song, recentlyList, repeat, handleNextSong])

   return (
      <Box
         className={clsx(styles.playingBar, {
            [styles.playingBarActive]: songPlaying?.song,
            [styles.hidePlayingBar]: isShowPlayingBar,
         })}
      >
         <Box className={styles.playingBarBottom}>
            <Box className={styles.subPlayBarBottom}>
               {songPlaying?.song && (
                  <Box className={styles.aboutNameBottom} onClick={handleShowPlayingBarCenter}>
                     <Typography variant='body1' className={styles.aboutNameBody} title='adasdas'>
                        {songPlaying?.author}: {songPlaying?.songName}
                     </Typography>
                  </Box>
               )}

               <Box className={styles.audioBtnGroup}>
                  <Box>
                     <IconButton className={styles.audioBtn} onClick={handleRepeat}>
                        <i
                           className={clsx(
                              styles.audioIcon,
                              repeat ? 'fad fa-repeat-1-alt' : 'fad fa-repeat-alt',
                              { [styles.audioBtnActive]: repeat }
                           )}
                           style={{ fontSize: 30 }}
                        />
                     </IconButton>
                     <IconButton className={styles.audioBtnPrev} onClick={handlePrevSong}>
                        <i className={clsx(styles.audioIcon, 'fad fa-step-backward')} />
                     </IconButton>
                     <IconButton
                        className={clsx(styles.audioBtnCenter, {
                           [styles.audioBtnCenterActive]: songPlaying?.song,
                        })}
                        onClick={handlePlayPause}
                     >
                        <Avatar
                           style={{ filter: songPlaying?.song && !playing && 'grayscale(0.5)' }}
                           className={clsx(styles.playBtn, {
                              [styles.pause]: !songPlaying?.song || !playing,
                           })}
                           alt='Remy Sharp'
                           src={
                              songPlaying?.song
                                 ? `${API}/${songPlaying?.thumb}`
                                 : 'https://bom.so/gZnnAt'
                           }
                        />
                     </IconButton>
                     <IconButton className={styles.audioBtnNext} onClick={handleNextSong}>
                        <i className={clsx(styles.audioIcon, 'fad fa-step-forward')} />
                     </IconButton>
                     <IconButton className={styles.audioBtn} onClick={handleRandom}>
                        <i
                           className={clsx(styles.audioIcon, 'fad fa-random', {
                              [styles.audioBtnActive]: random,
                           })}
                        />
                     </IconButton>
                  </Box>
               </Box>

               <audio ref={audioRef} src={`${API}/${songPlaying?.song}`} autoPlay />

               {songPlaying?.song && (
                  <Box className={styles.timeStateBottom} onClick={handleShowPlayingBarCenter}>
                     <Typography variant='body1'>
                        {showCurrentTime()}/{showDuration()}
                     </Typography>
                     <IconButton className={styles.favoriteBtnBottom}>
                        <HeartIcon />
                     </IconButton>
                  </Box>
               )}
            </Box>
            {songPlaying?.song && (
               <Box className={styles.processPlayingBarWrap}>
                  <input
                     type='range'
                     className={styles.processPlayingBar}
                     onChange={handleSeek}
                     value={currentTime.toString()}
                  />
               </Box>
            )}
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
   playlistPlaying: state.music.playlistPlaying,
   randomSongList: state.music.randomSongList,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(PlayingBar)
