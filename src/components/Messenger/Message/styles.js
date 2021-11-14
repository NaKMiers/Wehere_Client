import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   message: {
      display: 'flex',
      marginBottom: 8
   },
   avtMessage: {
      // border: `3px solid ${theme.border.light}`,
      alignSelf: 'flex-end'
   },
   textMessageWrap: {
      margin: '0px 8px'
   },
   textMessage: {
      background: theme.message.main,
      color: theme.message.text,
      padding: '6px 14px',
      marginTop: 4,
      borderRadius: 16
   },
   timeMessage: {
      margin: '0 8px',
      color: theme.message.lightText
   }
}))
