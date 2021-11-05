import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   message: {
      display: 'flex',
      marginBottom: 8
   },
   avtMessage: {
      border: '3px #ddd solid',
      alignSelf: 'flex-end'
   },
   textMessageWrap: {
      margin: '0px 8px'
   },
   textMessage: {
      backgroundColor: '#ffe3b3',
      padding: '6px 14px',
      marginTop: 4,
      borderRadius: 16
   },
   timeMessage: {
      margin: '0 8px'
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
