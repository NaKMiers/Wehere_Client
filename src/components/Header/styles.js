import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiToolbar-root': {
         justifyContent: 'space-between',
         minHeight: 0,
         padding: '0px 8px 8px 8px',
         width: '183.3333333%',
         transition: 'margin 0.5s ease-in-out',
      },
   },
   header: {
      background: theme.palette.primary.gradient,
   },

   headerContainer: {
      margin: 'auto',
      overflow: 'hidden',
   },

   topHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 0px',
   },
   wehereLogo: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: '34px',
      fontFamily: 'Architects Daughter',
   },
   searchTextField: {
      padding: 0,
      margin: 0,
   },
   searchInput: {
      color: theme.palette.primary.text,
      padding: '1px 6px',
   },
   headerTopBtnWrap: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '18%',
   },
   topHeaderBtn: {
      padding: 6,
      minWidth: 0,
   },

   headerItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '16.66666%',
      textDecoration: 'none',
      color: theme.palette.primary.text,
   },
   headerIcon: {
      margin: 'auto',
      fontSize: 36,
   },

   selectedHome: {
      transform: 'scale(1.25)',
   },

   selected: {
      transform: 'scale(1.3)',
   },
}))
