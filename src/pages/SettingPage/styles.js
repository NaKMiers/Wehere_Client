import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   settingItem: {
      width: '100%',
      textAlign: 'left'
   },
   deleteAccountItem: {
      backgroundColor: '#f44336',
      color: '#fff',
      textShadow: '1px 1px 2px #333',
      textAlign: 'center',
      width: 'calc(100% - 32px)',
      margin: 'auto'
   },
   collape: {
      marginLeft: 18
   },
   textField: {
      width: 'calc(100% - 18px)'
   },
   inputTextField: {
      padding: '12px 16px'
   }
}))
