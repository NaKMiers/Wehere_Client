import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   onlineUserBtn: {
      display: 'flex',
      height: 72,
      padding: 0,
      border: 'none'
   },
   link: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      textDecoration: 'none',
      color: theme.palette.secondary.text
   },
   avatar: {
      width: 42,
      height: 42
   },
   badge: {
      top: -14,
      right: 4
   },
   userName: {
      marginLeft: 12
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0
   }
}))
