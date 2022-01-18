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

function ShortModal({ curUser, open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')
   const [short, setShort] = useState(null)
   const [shortReview, setShortReview] = useState(null)

   const styles = useStyles()

   const handleUploadshort = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = e => {
         const reader = new FileReader()
         reader.onloadend = () => {
            setShortReview(reader.result)
         }

         const short = e.target.files[0]
         if (short.type.startsWith('video')) {
            // smaller then 100MB
            if (short.size <= 104857600) {
               reader.readAsDataURL(short)
               setShort(short)
            } else {
               alert('This short size must be less than 100Mb')
            }
         } else {
            alert('This is not a short, please choose a short to continue.')
         }
      }
      input.click()
   }

   const handleClear = () => {
      setStatusValue('')
      setShort(null)
      setShortReview(null)
   }

   const handlePostshortStatus = e => {
      e.preventDefault()
      const postShortStatus = async () => {
         let data = new FormData()
         data.append('short', short)
         data.append('statusText', statusValue)

         try {
            const res = await apis.postShortStatus(data)
            if (res.status === 200) {
               handleClear()
               handleCloseModal()
            }
         } catch (err) {
            alert('Post short status unsuccessfully. Please try again.')
            console.log(err)
         }
      }
      postShortStatus()
   }

   const rendershort = () => (
      <Box className={styles.shortItemWrap}>
         {short && <video className={styles.shortItem} src={shortReview} controls />}
      </Box>
   )

   return (
      <>
         <Modal open={open} onClose={handleCloseModal} className={styles.ShortModal}>
            <Paper className={styles.paper}>
               <form onSubmit={handlePostshortStatus}>
                  <Typography className={styles.title}>Post New Short</Typography>
                  <Box className={styles.shortBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={2}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
                     />

                     <Box className={styles.shortsList}>{rendershort()}</Box>
                     <ButtonGroup variant='text' className={styles.actionBtnWrap}>
                        <Button onClick={handleUploadshort}>
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

export default connect(null, mapDispatch)(ShortModal)
