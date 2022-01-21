import { Box, Button, ButtonGroup, Modal, Paper, Typography } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
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
         if (video.type.startsWith('video')) {
            // smaller then 100MB
            if (video.size <= 104857600) {
               reader.readAsDataURL(video)
               setVideo(video)
            } else {
               alert('This video size must be less than 100Mb')
            }
         } else {
            alert('This is not a video, please choose a video to continue.')
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
         data.append('video', video)
         data.append('statusText', statusValue)

         try {
            const res = await apis.postVideoStatus(data)
            if (res.status === 200) {
               handleClear()
               handleCloseModal()
            }
         } catch (err) {
            alert('Post video status unsuccessfully. Please try again.')
            console.log(err)
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
               <form onSubmit={handlePostVideoStatus}>
                  <Typography className={styles.title}>Post New Video</Typography>
                  <Box className={styles.videoBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={2}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
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

export default connect(null, mapDispatch)(VideoModal)
