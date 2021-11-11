import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: '#555'
      }
   },
   chatBox: {
      margin: 'auto',
      maxWidth: 960
   },
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
      // height: 'calc(100vh - 196px)',
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
   },
   emojiTable: {
      textAlign: 'center',
      height: '25vh'
   },
   emojiTableWrap: {
      height: 'calc(25vh - 48px)',
      padding: 8,
      overflow: 'scroll'
   },
   emoji: {
      fontSize: 20
   },
   emojiBar: {
      display: 'flex',
      justifyContent: 'center'
   },
   tabEmoji: {
      fontSize: 24,
      padding: 0,
      borderRadius: 0
   },

   paperSetting: {
      position: 'absolute',
      top: 56,
      bottom: 80,
      left: 0,
      right: 0,
      overflow: 'hidden'
   },
   headingSeting: {
      color: '#333',
      padding: '8px 16px',
      fontSize: 24
   },
   boxSetting: {
      width: '100%'
   }
}))
