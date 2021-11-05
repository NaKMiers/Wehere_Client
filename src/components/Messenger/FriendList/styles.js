import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   onlineUserBtn: {
      height: 72,
      padding: 0,
      border: 'none'
   },
   avatar: {
      width: 48,
      height: 48,
      border: '3px #ddd solid'
   },
   badge: {
      top: -14,
      right: 6
   },
   userName: {
      marginLeft: 8
   }
}))
