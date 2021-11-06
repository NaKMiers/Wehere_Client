import {
   Avatar,
   Box,
   Button,
   Collapse,
   Dialog,
   IconButton,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import { useState } from 'react'
import useStyles from './styles'

function AccountListItem() {
   const [isOpenRmBtn, setOpenRmBtn] = useState(false)
   const [isOpenDialogRemoveAcc, setOpenDialogRemoveAcc] = useState(false)

   const handleClick = () => {
      setOpenRmBtn(!isOpenRmBtn)
   }

   const handleOpen = () => {
      setOpenDialogRemoveAcc(true)
   }

   const handleClose = () => {
      setOpenDialogRemoveAcc(!isOpenDialogRemoveAcc)
      setOpenRmBtn(!isOpenRmBtn)
   }

   const styles = useStyles()

   return (
      <>
         <ListItem className={styles.accountItem}>
            <ListItemAvatar>
               <Avatar className={styles.avatar} alt='avt' src='https://bom.to/I9Gu9L'></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Account 1' />
            <Button className={styles.changeAccBtn} variant='contained'>
               <SyncAltIcon className={styles.changeAccIcon} />
            </Button>
            <IconButton className={styles.showRmIcon}>
               {isOpenRmBtn ? (
                  <KeyboardArrowRightIcon onClick={handleClick} />
               ) : (
                  <KeyboardArrowLeftIcon onClick={handleClick} />
               )}
            </IconButton>
            <Collapse in={isOpenRmBtn} timeout='auto' unmountOnExit>
               <IconButton className={styles.removeAccBtn} onClick={handleOpen}>
                  <HighlightOffIcon />
               </IconButton>
            </Collapse>
         </ListItem>
         <Dialog onClose={handleClose} open={isOpenDialogRemoveAcc}>
            <Typography className={styles.dialogTitle}>Remove this account?</Typography>
            <Typography className={styles.dialogContent}>This action can't be restore.</Typography>
            <Box className={styles.dialogBtnWrap}>
               <Button
                  variant='contained'
                  style={{ backgroundColor: '#f44336', color: '#fff' }}
                  className={styles.dialogBtn}
               >
                  Remove
               </Button>
               <Button
                  onClick={handleClose}
                  style={{ backgroundColor: '#ddd', color: '#333' }}
                  variant='contained'
                  className={styles.dialogBtn}
               >
                  Cancel
               </Button>
            </Box>
         </Dialog>
      </>
   )
}

export default AccountListItem
