import {
   Box,
   Button,
   ButtonGroup,
   CardMedia,
   Fade,
   Modal,
   Paper,
   Typography,
} from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import UploadIcon from '../../Icons/UploadIcon'
import TrashIcon from '../../Icons/TrashIcon'
import SyncIcon from '../../Icons/SyncIcon'
import useStyles from './styles'
import { useState } from 'react'
import apis from '../../../apis'

function ImageModal({ curUser, open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')
   const [imageList, setImageList] = useState([])

   const styles = useStyles()

   const handleUpdateAvtAndBg = index => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const reader = new FileReader()
         reader.onloadend = () => {
            if (index >= 0) {
               setImageList(
                  imageList.map((image, i) => {
                     if (i !== index) return image
                     return reader.result
                  })
               )
            } else {
               setImageList([...imageList, reader.result])
            }
         }
         reader.readAsDataURL(e.target.files[0])
      }
      input.click()
   }

   const handleRemoveImage = index => {
      setImageList(imageList.filter((image, i) => i !== index))
   }

   const handleClear = () => {
      setStatusValue('')
      setImageList([])
   }

   const handlePostImageStatus = e => {
      e.preventDefault()
      const postImageStatus = async () => {
         try {
            await apis.postImageStatus({
               statusText: statusValue,
               images: imageList,
            })
            handleClear()
            handleCloseModal()
         } catch (err) {
            console.log(err)
         }
      }
      postImageStatus()
   }

   const renderImageItem = () =>
      imageList.map((image, i) => (
         <Box key={i} className={styles.imageItemWrap}>
            <CardMedia className={styles.imageItem} component='img' alt='image' image={image} />
            <Box className={styles.actionImgBtns}>
               <Button
                  className={styles.removeImgBtn}
                  variant='contained'
                  onClick={() => handleRemoveImage(i)}
               >
                  <TrashIcon />
               </Button>
               <Button
                  className={styles.changeImgBtn}
                  variant='contained'
                  onClick={() => handleUpdateAvtAndBg(i)}
               >
                  <SyncIcon style={{ fontSize: 16 }} />
               </Button>
            </Box>
         </Box>
      ))

   return (
      <>
         <Fade in={open}>
            <Modal open onClose={handleCloseModal} className={styles.imageModal}>
               <Paper className={styles.paper}>
                  <form onSubmit={handlePostImageStatus}>
                     <Typography className={styles.title}>Post New Image</Typography>
                     <Box className={styles.imageBoxWrap}>
                        <TextareaAutosize
                           placeholder='Status...'
                           minRows={2}
                           className={styles.statusText}
                           value={statusValue}
                           onChange={e => setStatusValue(e.target.value)}
                        />

                        <Box className={styles.imagesList}>
                           {!!imageList.length && (
                              <>
                                 <Typography className={styles.amountImages}>
                                    {imageList.length} {imageList.length === 1 ? 'image' : 'images'}
                                 </Typography>
                                 {renderImageItem()}
                              </>
                           )}
                        </Box>
                        <ButtonGroup variant='text' className={styles.actionBtnWrap}>
                           <Button onClick={() => handleUpdateAvtAndBg()}>
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
         </Fade>
      </>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(ImageModal)
