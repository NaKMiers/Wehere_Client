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
import { useState } from 'react'
import ChangeIcon from '../../components/Icons/ChangeIcon'
import ExpandIcon from '../../components/Icons/ExpandIcon'
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
               <ChangeIcon style={{ fontSize: 24 }} />
            </Button>
            <IconButton className={styles.showRmIcon} onClick={handleClick}>
               {isOpenRmBtn ? (
                  <ExpandIcon color='secondary' style={{ transform: 'rotate(90deg)' }} />
               ) : (
                  <ExpandIcon color='secondary' style={{ transform: 'rotate(-90deg)' }} />
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
               <Button variant='contained' className={styles.dialogRmBtn}>
                  Remove
               </Button>
               <Button
                  onClick={handleClose}
                  variant='contained'
                  className={styles.dialogCancelBtn}
               >
                  Cancel
               </Button>
            </Box>
         </Dialog>
      </>
   )
}

export default AccountListItem
