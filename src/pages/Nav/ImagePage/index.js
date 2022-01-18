import { Box, Fab } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import AddIcon from '../../../components/Icons/AddIcon'
import Image from '../../../components/Nav1/Image'
import ImageModal from '../../../components/Nav1/ImageModal'
import useStyles from './styles'

function ImagePage({ curUser, images }) {
   const [open, setOpen] = useState(false)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   const renderImages = () =>
      images.map(img => <Image key={img.image._id} imagePost={img.image} author={img.author} />)

   return (
      <>
         <Header />

         <div style={{ padding: 24 }}>{renderImages()}</div>

         <ImageModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
         <Box className={styles.addImageBtnBox} onClick={handleOpenModal}>
            <Fab aria-label='add' className={styles.addImageBtn}>
               <AddIcon />
            </Fab>
         </Box>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   images: state.image.images,
})

export default connect(mapState, null)(ImagePage)
