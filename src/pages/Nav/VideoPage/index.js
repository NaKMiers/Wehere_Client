import { Button } from '@material-ui/core'
import { memo, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import Video from '../../../components/Nav1/Video'
import VideoModal from '../../../components/Nav1/VideoModal'
import useStyles from './styles'

function VideoPage({ curUser, videos }) {
   const [open, setOpen] = useState(false)

   const handleCloseModal = useCallback(() => setOpen(false), [])
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   const renderVideos = () =>
      videos.map(v => <Video key={v.video._id} videoPost={v.video} author={v.author} />)

   return (
      <>
         <div className={styles.videoPage}>
            <Button className={styles.addNewVideoBtn} onClick={handleOpenModal}>
               Add New Video
            </Button>
            {renderVideos()}
         </div>

         <VideoModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   videos: state.video.videos,
})

export default connect(mapState, null)(memo(VideoPage))
