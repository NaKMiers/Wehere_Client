import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2196f3',
      color: '#fff',
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
      borderRadius: '50%'
   },
   avtLink: {
      position: 'relative'
   },
   avt: {
      width: 48,
      height: 48,
      border: '3px #ddd solid'
   },
   badge: {
      position: 'absolute',
      top: 9,
      right: 5
   },
   menuIcon: {
      color: '#fff'
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0
   },

   chatContent: {
      height: 'calc(100vh - 196px)',
      padding: 16
   },

   chatInput: {
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2197f3',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
   },
   inputText: {
      flexGrow: '1'
   },
   inputProps: {
      color: '#fff'
   }
}))
