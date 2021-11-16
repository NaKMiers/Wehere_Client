import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiToolbar-root': {
         justifyContent: 'space-between',
         minHeight: 0,
         padding: '8px 12px',
         width: '183.3333333%',
         transition: 'margin 0.5s ease-in-out'
      }
   },
   header: {
      background: theme.palette.primary.gradient
   },
   headerContainer: {
      margin: 'auto',
      overflow: 'hidden'
   },
   headerItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '16.66666%',
      textDecoration: 'none',
      color: theme.palette.primary.text
   },
   headerIcon: {
      margin: 'auto',
      fontSize: 36
   },

   selectedHome: {
      transform: 'scale(1.11)'
   },

   selected: {
      transform: 'scale(1.3)'
   }
}))
