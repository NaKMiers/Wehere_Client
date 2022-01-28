import { Box, Button, ButtonGroup, Modal, Paper, Typography } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import apis from '../../../apis'
import TrashIcon from '../../Icons/TrashIcon'
import useStyles from './styles'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import { connect } from 'react-redux'

function BlogModal({ open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')
   const [error, setError] = useState('')

   const styles = useStyles()

   const handleClear = () => {
      setStatusValue('')
   }

   const handlePostImageStatus = e => {
      e.preventDefault()
      const postImageStatus = async () => {
         if (statusValue.trim()) {
            try {
               const res = await apis.postBlogStatus({ statusText: statusValue })
               actionCreators.addBlog(res.data)
               handleClear()
               handleCloseModal()
            } catch (err) {
               console.log(err)
            }
         } else {
            setError('Drum text, please enter text to continue.')
         }
      }
      postImageStatus()
   }

   return (
      <>
         <Modal open={open} onClose={handleCloseModal} className={styles.blogModal}>
            <Paper className={styles.paper}>
               <Typography className={styles.title}>Post New Blog</Typography>
               <Typography variant='subtitle2' className={styles.error}>
                  {error}
               </Typography>
               <form onSubmit={handlePostImageStatus}>
                  <Box className={styles.blogBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={3}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
                        onFocus={() => setError('')}
                        styles={{ overflow: 'srcoll' }}
                     />

                     <ButtonGroup variant='text' className={styles.actionBtnWrap}>
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

export default connect(null, mapDispatch)(BlogModal)
