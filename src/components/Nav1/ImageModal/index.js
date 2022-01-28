import { Box, Button, ButtonGroup, CardMedia, Modal, Paper, Typography } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import SyncIcon from '../../Icons/SyncIcon'
import TrashIcon from '../../Icons/TrashIcon'
import UploadIcon from '../../Icons/UploadIcon'
import useStyles from './styles'

function ImageModal({ curUser, open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')
   const [imageListPreview, setImageListPreview] = useState([])
   const [imageList, setImageList] = useState([])
   const [error, setError] = useState('')

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
         if (!files[0].type.startsWith('image')) {
            alert('This is must be an image.')
         } else if (files[0].type.size > 15728640) {
            alert('Image size must be less than or equal to 15MB.')
         } else {
            reader.readAsDataURL(files[0])
         }
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

         if (statusValue.trim() && imageList.length) {
            try {
               const res = await apis.postImageStatus(data)
               actionCreators.addImage(res.data)
               handleClear()
               handleCloseModal()
            } catch (err) {
               alert('Post image status unsuccessfully. Please try again.')
               console.log(err)
            }
         } else {
            setError('Drum text or empty image, please enter text and upload images to continue.')
         }
      }
      postImageStatus()
   }

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
         <Modal open={open} onClose={handleCloseModal} className={styles.imageModal}>
            <Paper className={styles.paper}>
               <Typography className={styles.title}>Post New Image</Typography>
               <Typography variant='subtitle2' className={styles.error}>
                  {error}
               </Typography>
               <form onSubmit={handlePostImageStatus}>
                  <Box className={styles.imageBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={2}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
                        onFocus={() => setError('')}
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
      </>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(ImageModal)
