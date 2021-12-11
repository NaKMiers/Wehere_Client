import { Button, Modal, Paper, TextField, Typography, Fade } from '@material-ui/core'
import useStyles from './styles'

function AddNewSongModal({ open, handleClose }) {
   const styles = useStyles()

   return (
      <Fade in={open}>
         <Modal
            open
            onClose={() => handleClose(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paper}>
               <Typography variant='h5' className={styles.heading}>
                  Add New Song
               </Typography>
               <form className={styles.form}>
                  <TextField
                     className={styles.textField}
                     id='filled-search'
                     label='Song Name'
                     variant='filled'
                  />

                  <TextField
                     className={styles.textField}
                     id='filled-search'
                     label='Author'
                     variant='filled'
                  />

                  <label htmlFor='audio' className={styles.label}>
                     Select Audio
                  </label>
                  <TextField className={styles.textFieldFile} id='audio' type='file' />

                  <label htmlFor='avt' className={styles.label}>
                     Select Avatar
                  </label>
                  <TextField className={styles.textFieldFile} id='avt' type='file' />
                  <Button className={styles.submitBtn} type='button' variant='contained'>
                     Add
                  </Button>
               </form>
            </Paper>
         </Modal>
      </Fade>
   )
}

export default AddNewSongModal
