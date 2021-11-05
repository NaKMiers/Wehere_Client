import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffeb3b',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12
   },
   textHeader: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 8px'
   },
   userName: {
      fontSize: 20
   },
   status: {
      fontSize: 12,
      color: '#aaa',
      marginTop: -4
   },
   avtBtn: {
      borderRadius: '50%',
      padding: 8
   },
   avt: {
      width: 48,
      height: 48,
      border: '3px #ddd solid'
   },
   badge: {
      top: -14,
      right: 6
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0
   }
}))
