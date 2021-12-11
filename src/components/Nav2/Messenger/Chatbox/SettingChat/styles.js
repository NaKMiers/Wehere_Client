import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   paperSetting: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      overflow: 'hidden',
      outline: 'none',
      padding: 8,
   },
   boxSetting: {
      width: '100%',
   },
   nicknameInput: {
      width: '100%',
   },
   collapse: {
      padding: '0 16px',
      overflow: 'scroll',
      maxHeight: '40vh',
   },
}))
