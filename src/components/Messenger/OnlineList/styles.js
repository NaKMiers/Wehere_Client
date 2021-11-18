import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   onlineUserBtn: {
      display: 'flex',
      height: 72,
      padding: 0,
      border: 'none',
   },
   link: {
      display: 'flex',
      flexGrow: 1,
      textDecoration: 'none',
      color: '#333',
   },
   avatar: {
      width: 42,
      height: 42,
      border: '3px #ddd solid',
   },
   badge: {
      top: 9,
      right: 6,
   },
   userName: {
      marginLeft: 12,
   },
   menuItem: {
      padding: '6px 12px',
      minHeight: 0,
   },
}))
