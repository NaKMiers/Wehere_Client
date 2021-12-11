import {
   Avatar,
   Box,
   Button,
   Collapse,
   Dialog,
   Fade,
   IconButton,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useState } from 'react'
import ChangeIcon from '../../../components/Icons/ChangeIcon'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import useStyles from './styles'

function AccountListItem() {
   const [isOpenRmBtn, setOpenRmBtn] = useState(false)
   const [isOpenDialogAcc, setOpenDialogAcc] = useState(false)

   const handleClick = () => {
      setOpenRmBtn(!isOpenRmBtn)
   }

   const handleOpen = type => {
      setOpenDialogAcc(type)
   }

   const handleClose = () => {
      setOpenDialogAcc(false)
      setOpenRmBtn(false)
   }

   const styles = useStyles()

   return (
      <>
         <ListItem className={styles.accountItem}>
            <ListItemAvatar>
               <Avatar className={styles.avatar} alt='avt' src='https://bom.to/I9Gu9L'></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Account 1' />
            <Button
               className={styles.changeAccBtn}
               variant='contained'
               onClick={() => handleOpen('change')}
            >
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
               <IconButton className={styles.removeAccBtn} onClick={() => handleOpen('remove')}>
                  <HighlightOffIcon />
               </IconButton>
            </Collapse>
         </ListItem>

         <Fade in={!!isOpenDialogAcc}>
            <Dialog onClose={handleClose} open>
               <Typography className={styles.dialogTitle}>
                  {isOpenDialogAcc === 'remove'
                     ? 'Remove this account?'
                     : 'Change to this account.'}
               </Typography>
               <Typography className={styles.dialogContent}>
                  {isOpenDialogAcc === 'remove'
                     ? "This action can't be restore."
                     : 'This account will be change.'}
               </Typography>
               <Box className={styles.dialogBtnWrap}>
                  <Button variant='contained' className={styles.dialogRmBtn}>
                     {isOpenDialogAcc === 'remove' ? 'Remove' : 'Change'}
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
         </Fade>
      </>
   )
}

export default AccountListItem
