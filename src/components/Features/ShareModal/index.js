import { Box, Button, IconButton, Modal, Paper, Typography } from '@material-ui/core'
import { memo, useRef } from 'react'
import useStyles from './styles'

function ShareModal({ open, handleClose }) {
   const linkRef = useRef()

   const handleCopy = () => {
      console.log('handleCopy')
   }

   const styles = useStyles()

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby='modal-modal-title'
         aria-describedby='modal-modal-description'
      >
         <Paper className={styles.paper}>
            <Typography variant='h5' className={styles.heading}>
               Share
            </Typography>
            <Box className={styles.body}>
               <Box className={styles.shareLinkVia}>
                  <Typography className={styles.subHeading}>Share this link via</Typography>
                  <Box className={styles.socialIconWrap}>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/anqC0Z' width='50' height='50' />
                     </IconButton>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/Bamkpk' width='50' height='50' />
                     </IconButton>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/obYGE9' width='50' height='50' />
                     </IconButton>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/anqC0Z' width='50' height='50' />
                     </IconButton>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/obYGE9' width='50' height='50' />
                     </IconButton>
                     <IconButton className={styles.socialIconBtn}>
                        <img alt='social' src='https://bom.to/anqC0Z' width='50' height='50' />
                     </IconButton>
                  </Box>
               </Box>
               <Box className={styles.copyLink}>
                  <Typography className={styles.subHeading}>Or copy link</Typography>
                  <Box className={styles.copyLinkWrap}>
                     <Typography className={styles.linkToCopy} ref={linkRef}>
                        https://www.google.com/search?q=share+modal&sxsrf=AOaemvI0HVpYuOAFHR51XRHxMwu0mRj5VQ:1637163041062&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9noHM25_0AhU4r1YBHawlAIgQ_AUoAXoECAEQAw&biw=958&bih=963&dpr=1#imgrc=G6nbVNL7Leg-7M
                     </Typography>
                     <Button className={styles.copyBtn} onClick={handleCopy}>
                        Copy
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Paper>
      </Modal>
   )
}

export default memo(ShareModal)
