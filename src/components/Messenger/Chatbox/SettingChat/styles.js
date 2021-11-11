import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   paperSetting: {
      position: 'absolute',
      top: 56,
      bottom: 80,
      left: 16,
      right: 16,
      overflow: 'hidden'
   },
   boxSetting: {
      width: '100%'
   },
   nicknameInput: {
      width: '100%'
   },
   collapse: {
      padding: '0 16px',
      overflow: 'scroll',
      maxHeight: '40vh'
   }
}))
