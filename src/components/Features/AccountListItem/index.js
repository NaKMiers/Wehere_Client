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
   TextField,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useState } from 'react'
import ChangeIcon from '../../../components/Icons/ChangeIcon'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import useStyles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import { useHistory } from 'react-router-dom'
import apis from '../../../apis'
import { API } from '../../../constants'
import { memo } from 'react'

function AccountListItem({ account, actionCreators }) {
   const [isOpenRmBtn, setOpenRmBtn] = useState(false)
   const [isOpenDialogAcc, setOpenDialogAcc] = useState(false)
   const [passwordValue, setPasswordValue] = useState('')

   const [errorPassword, setErrorPassword] = useState('')

   const styles = useStyles()
   const history = useHistory()

   const handleClick = () => {
      setOpenRmBtn(!isOpenRmBtn)
   }

   const handleOpen = value => {
      setOpenDialogAcc(value)
      setPasswordValue('')
      setErrorPassword('')
   }

   const handleClose = () => {
      setOpenDialogAcc(false)
      setOpenRmBtn(false)
   }

   const handleRemoveAccount = () => {
      actionCreators.removeAccount(account._id)
      setOpenDialogAcc(false)
   }

   const handleChangeAccount = async () => {
      handleValidate()
      if (passwordValue && !errorPassword) {
         try {
            const res = await apis.login(account.email, passwordValue.trim())
            if (!res.data.matchPassword) {
               setErrorPassword('Password incorect.')
            } else {
               actionCreators.loginRequest(res.data.userLogin)
               localStorage.setItem('user', res.data.token) // set localStorage('user') for JWT

               const accounts = JSON.parse(localStorage.getItem('accounts'))
               if (!accounts) {
                  actionCreators.addAccount(res.data.userLogin._id)
               } else {
                  if (!accounts.includes(res.data.userLogin._id)) {
                     localStorage.setItem(
                        'accounts',
                        JSON.stringify([...accounts, res.data.userLogin._id])
                     )
                     actionCreators.addAccount(res.data.userLogin._id)
                  }
               }

               history.push('/')
            }
         } catch (err) {
            console.log(err)
         }
      }
   }

   const handleValidate = () => {
      if (!passwordValue.trim()) {
         setErrorPassword('Password is empty.')
      }
   }

   return (
      <>
         <ListItem className={styles.accountItem}>
            <ListItemAvatar>
               <Avatar
                  className={styles.avatar}
                  alt='avt'
                  src={`${API}/${account.avatar}`}
               ></Avatar>
            </ListItemAvatar>
            <ListItemText primary={account.username} />
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
               <Box className={styles.confirmPWWrap}>
                  <Typography className={styles.dialogContent}>
                     {isOpenDialogAcc === 'remove'
                        ? "This action can't be restore."
                        : account.authType === 'local' && 'Please enter password to continue.'}
                  </Typography>

                  {isOpenDialogAcc !== 'remove' ? (
                     account.authType === 'local' ? (
                        <TextField
                           type='password'
                           name='password'
                           label='password...'
                           variant='filled'
                           className={styles.passwordInput}
                           InputProps={{
                              classes: { input: styles.inputTextField },
                           }}
                           value={passwordValue}
                           onChange={e => setPasswordValue(e.target.value)}
                           onBlur={() => handleValidate()}
                           onFocus={() => setErrorPassword('')}
                           error={!!errorPassword}
                           helperText={errorPassword}
                        />
                     ) : (
                        <Typography>
                           You can't switch to this account, only for local accounts.
                        </Typography>
                     )
                  ) : null}
               </Box>

               <Box className={styles.dialogBtnWrap}>
                  {account.authType === 'local' && (
                     <Button
                        variant='contained'
                        className={styles.dialogRmBtn}
                        onClick={
                           isOpenDialogAcc === 'remove' ? handleRemoveAccount : handleChangeAccount
                        }
                     >
                        {isOpenDialogAcc === 'remove' ? 'Remove' : 'Change'}
                     </Button>
                  )}
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

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(memo(AccountListItem))
