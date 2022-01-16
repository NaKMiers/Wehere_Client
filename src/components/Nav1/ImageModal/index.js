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
   const [imageListPreview, setImageListPreview] = useState([])
   const [imageList, setImageList] = useState([])

   const styles = useStyles()

   const handleUpdateAvtAndBg = index => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const files = e.target.files
         const reader = new FileReader()
         reader.onload = () => {
            if (index >= 0) {
               setImageListPreview(
                  imageListPreview.map((image, i) => {
                     if (i !== index) return image
                     return reader.result
                  })
               )
               setImageList(
                  imageListPreview.map((image, i) => {
                     if (i !== index) return image
                     return files[0]
                  })
               )
            } else {
               setImageListPreview([...imageListPreview, reader.result])
               setImageList([...imageList, files[0]])
            }
         }
         reader.readAsDataURL(files[0])
      }
      input.click()
   }

   const handleRemoveImage = index => {
      setImageListPreview(imageListPreview.filter((image, i) => i !== index))
      setImageList(imageList.filter((image, i) => i !== index))
   }

   const handleClear = () => {
      setStatusValue('')
      setImageListPreview([])
      setImageList([])
   }

   const handlePostImageStatus = e => {
      e.preventDefault()
      const postImageStatus = async () => {
         let data = new FormData()
         data.append('statusText', statusValue)
         for (let i = 0; i < imageList.length; i++) {
            data.append('image', imageList[i])
         }

         try {
            const res = await apis.postImageStatus(data)
            if (res.status === 200) {
               handleClear()
               handleCloseModal()
            }
         } catch (err) {
            alert('Post image status unsuccessfully. Please try again.')
            console.log(err)
         }
      }
      postImageStatus()
   }

   console.log('imageList: ', imageList)
   console.log('imageListPreview: ', imageListPreview)

   const renderImageItem = () =>
      imageListPreview.map((image, i) => (
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
                           {!!imageListPreview.length && (
                              <>
                                 <Typography className={styles.amountImages}>
                                    {imageListPreview.length}{' '}
                                    {imageListPreview.length === 1 ? 'image' : 'images'}
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
