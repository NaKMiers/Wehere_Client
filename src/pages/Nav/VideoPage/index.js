import { Box, Fab } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import AddIcon from '../../../components/Icons/AddIcon'
import Video from '../../../components/Nav1/Video'
import VideoModal from '../../../components/Nav1/VideoModal'
import useStyles from './styles'

function VideoPage({ curUser }) {
   const [open, setOpen] = useState(false)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            <Video />
            <Video />
         </div>
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
})

export default connect(mapState, null)(VideoPage)
