import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiToolbar-root': {
         justifyContent: 'space-between',
         minHeight: 0,
         padding: '0px 8px 8px 8px',
         width: '183.3333333%',
         transition: 'margin 0.5s ease-in-out',
         '@media (min-width: 780px)': {
            padding: '8px 8px 8px 8px',
         },
      },
   },
   header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      background: theme.palette.primary.gradient,
      padding: '0px 24px',
   },

   navigation: {
      margin: 'auto',
      overflow: 'hidden',
   },

   topHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 0px',
      '@media (min-width: 780px)': {
         display: 'none',
      },
   },
   leftHeader: {
      width: '27.5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 0px',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   rightHeader: {
      width: '27.5%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '6px 0px',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   avatar: {
      cursor: 'pointer',
      marginLeft: 8,
   },

   wehereLogo: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: '34px',
      fontFamily: 'Architects Daughter',
   },
   searchTextField: {
      width: '100%',
      padding: 0,
      margin: '0px 8px 0px 0px',
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
      padding: 10,
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
