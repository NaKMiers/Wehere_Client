import { Box, Button, ButtonGroup, Modal, Paper, Typography } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { memo, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import TrashIcon from '../../Icons/TrashIcon'
import UploadIcon from '../../Icons/UploadIcon'
import useStyles from './styles'

function VideoModal({ curUser, open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')
   const [video, setVideo] = useState(null)
   const [videoReview, setVideoReview] = useState(null)
   const [error, setError] = useState('')

   const styles = useStyles()

   const handleUploadVideo = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const reader = new FileReader()
         reader.onloadend = () => {
            setVideoReview(reader.result)
         }

         const video = e.target.files[0]

         if (!video.type.startsWith('video')) {
            alert('This is not a video, please choose a video to continue.')
         } else if (video.size > 104857600) {
            alert('This video size must be less than or equal to 100Mb')
         } else if (!/^[a-zA-Z0-9 +(),-.]+$/.test(video.name)) {
            alert('Video name is invalid. Plase rename and try again.')
         } else {
            setVideo(video)
            reader.readAsDataURL(video)
         }
      }
      input.click()
   }

   const handleClear = () => {
      setStatusValue('')
      setVideo(null)
      setVideoReview(null)
   }

   const handlePostVideoStatus = e => {
      e.preventDefault()
      const postVideoStatus = async () => {
         let data = new FormData()
         data.append('statusText', statusValue)
         data.append('video', video)

         if (statusValue.trim() && video) {
            try {
               const res = await apis.postVideoStatus(data)
               actionCreators.addVideo(res.data)
               handleClear()
               handleCloseModal()
            } catch (err) {
               alert('Post video status unsuccessfully. Please try again.')
               console.log(err)
            }
         } else {
            setError('Drum text or empty video, please enter text and upload video to continue.')
         }
      }
      postVideoStatus()
   }

   const renderVideo = () => (
      <Box className={styles.videoItemWrap}>
         {video && <video className={styles.videoItem} src={videoReview} controls />}
      </Box>
   )

   return (
      <>
         <Modal open={open} onClose={handleCloseModal} className={styles.videoModal}>
            <Paper className={styles.paper}>
               <Typography className={styles.title}>Post New Video</Typography>
               <Typography variant='subtitle2' className={styles.error}>
                  {error}
               </Typography>
               <form onSubmit={handlePostVideoStatus}>
                  <Box className={styles.videoBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={2}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
                        onFocus={() => setError('')}
                     />

                     <Box className={styles.videosList}>{renderVideo()}</Box>
                     <ButtonGroup variant='text' className={styles.actionBtnWrap}>
                        <Button onClick={handleUploadVideo}>
                           Upload <UploadIcon color='secondary' style={{ marginLeft: 8 }} />
                        </Button>
                        <Button onClick={handleClear}>
                           Clear <TrashIcon color='secondary' style={{ marginLeft: 8 }} />
                        </Button>
                     </ButtonGroup>
                  </Box>
                  <Button type='submit' className={styles.postBtn}>
                     Post
                  </Button>
               </form>
            </Paper>
         </Modal>
      </>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(memo(VideoModal))
