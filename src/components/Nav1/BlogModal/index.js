import { Box, Button, ButtonGroup, Modal, Paper, Typography } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import TrashIcon from '../../Icons/TrashIcon'
import useStyles from './styles'

function BlogModal({ curUser, open, handleCloseModal, actionCreators }) {
   const [statusValue, setStatusValue] = useState('')

   const styles = useStyles()

   const handleClear = () => {
      setStatusValue('')
   }

   const handlePostImageStatus = e => {
      e.preventDefault()
      const postImageStatus = async () => {
         try {
            await apis.postBlogStatus({ statusText: statusValue })
            handleClear()
            handleCloseModal()
         } catch (err) {
            console.log(err)
         }
      }
      postImageStatus()
   }

   return (
      <>
         <Modal open={open} onClose={handleCloseModal} className={styles.blogModal}>
            <Paper className={styles.paper}>
               <form onSubmit={handlePostImageStatus}>
                  <Typography className={styles.title}>Post New Blog</Typography>
                  <Box className={styles.blogBoxWrap}>
                     <TextareaAutosize
                        placeholder='Status...'
                        minRows={5}
                        className={styles.statusText}
                        value={statusValue}
                        onChange={e => setStatusValue(e.target.value)}
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
