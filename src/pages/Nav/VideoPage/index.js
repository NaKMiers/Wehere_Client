import { Box, Fab } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import AddIcon from '../../../components/Icons/AddIcon'
import Video from '../../../components/Nav1/Video'
import VideoModal from '../../../components/Nav1/VideoModal'
import useStyles from './styles'

function VideoPage({ curUser, videos }) {
   const [open, setOpen] = useState(false)

   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   const renderVideos = () =>
      videos.map(v => <Video key={v.video._id} videoPost={v.video} author={v.author} />)

   return (
      <>
         <Header />

         <div style={{ padding: 24 }}>{renderVideos()}</div>

         <VideoModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
         <Box className={styles.addVideoBtnBox} onClick={handleOpenModal}>
            <Fab aria-label='add' className={styles.addVideoBtn}>
               <AddIcon />
            </Fab>
         </Box>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   videos: state.video.videos,
})

export default connect(mapState, null)(VideoPage)
