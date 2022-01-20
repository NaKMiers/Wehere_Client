import {
   Button,
   Modal,
   Paper,
   TextField,
   Typography,
   Fade,
   Box,
   CardMedia,
} from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'
import apis from '../../../../apis'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../../../actions'

function AddNewSongModal({ open, handleCloseModal, actionCreators }) {
   const [songName, setSongName] = useState()
   const [author, setAuthor] = useState()
   const [song, setSong] = useState(null)
   const [songPreview, setSongPreview] = useState(null)
   const [fileName, setFileName] = useState(null)
   const [thumb, setThumb] = useState(null)
   const [thumbPreview, setThumbPreview] = useState(null)

   const styles = useStyles()

   const handleUploadSong = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const file = e.target.files[0]
         const reader = new FileReader()
         reader.onload = () => {
            // console.log('reader.result: ', reader.result)
            setSongPreview(reader.result)
         }

         if (!file.type.startsWith('audio')) {
            alert('This must to a audio.')
         } else if (file.size > 52428800) {
            alert('This must to less than or equal to 50MB')
         } else {
            setFileName(file.name)
            setSong(file)
            reader.readAsDataURL(file)
         }
      }
      input.click()
   }

   const handleUploadThumb = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const file = e.target.files[0]
         const reader = new FileReader()
         reader.onload = () => {
            setThumbPreview(reader.result)
         }

         if (!file.type.startsWith('image')) {
            alert('This must to a image.')
         } else if (file.size > 5242880) {
            alert('This must to less than or equal to 5MB')
         } else {
            setThumb(file)
            reader.readAsDataURL(file)
         }
      }
      input.click()
   }

   console.log('song: ', song)

   const handleAddSong = e => {
      e.preventDefault()
      const addSong = async () => {
         let data = new FormData()
         data.append('songName', songName)
         data.append('author', author)
         data.append('song', song)
         data.append('song', thumb)

         try {
            const res = await apis.addSong(data)
            actionCreators.addNewSong(res.data)
            handleClear()
            handleCloseModal()
         } catch (err) {
            alert('Add new song unsuccessfully. Please try again.')
            console.log(err)
         }
      }
      addSong()
   }

   const handleClear = () => {
      setSongName()
      setAuthor()
      setSong(null)
      setSongPreview(null)
      setFileName(null)
      setThumb(null)
      setThumbPreview(null)
   }

   return (
      <Fade in={open}>
         <Modal
            open
            onClose={() => handleCloseModal()}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paper}>
               <Typography variant='h5' className={styles.heading}>
                  Add New Song
               </Typography>
               <form className={styles.form} onSubmit={handleAddSong}>
                  <TextField
                     className={styles.textField}
                     id='filled-search'
                     label='Song Name'
                     variant='filled'
                     onChange={e => setSongName(e.target.value)}
                  />

                  <TextField
                     className={styles.textField}
                     id='filled-search'
                     label='Author'
                     variant='filled'
                     onChange={e => setAuthor(e.target.value)}
                  />

                  {songPreview && (
                     <Box className={styles.audioWrap}>
                        <audio className={styles.audio} src={songPreview} controls autoPlay />
                     </Box>
                  )}
                  <Box className={styles.fileAndThumbWrap}>
                     <Box className={styles.selectSongWrap}>
                        <Button className={styles.selectSongBtn} onClick={handleUploadSong}>
                           Select Song
                        </Button>
                        <Typography variant='body2' className={styles.fileName}>
                           {fileName}
                        </Typography>
                     </Box>
                     <Box className={styles.selectThumbWrap}>
                        <Button className={styles.selectThumbBtn} onClick={handleUploadThumb}>
                           Thumbnail
                        </Button>
                        {thumbPreview && (
                           <Box className={styles.thumbFrame}>
                              <CardMedia
                                 className={styles.thumbnail}
                                 component='img'
                                 height='194'
                                 image={thumbPreview}
                                 alt='thumbnail'
                              />
                           </Box>
                        )}
                     </Box>
                  </Box>

                  <Button className={styles.submitBtn} type='submit' variant='contained'>
                     Add
                  </Button>
               </form>
            </Paper>
         </Modal>
      </Fade>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(AddNewSongModal)
