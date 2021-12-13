import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiBadge-colorPrimary': {
         background: theme.palette.success.main,
         border: `1.5px solid ${theme.border.main}`,
      },
   },
   chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      padding: '2px 12.5px',
      borderTop: `3px solid ${theme.border.main}`,
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
   },
   moreBtn: {
      cursor: 'pointer',
      padding: 12,
   },
   moreIcon: {
      fontSize: 22,
      color: theme.palette.primary.text,
   },
   textHeader: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 8px',
   },
   userName: {
      fontSize: 20,
   },
   status: {
      fontSize: 12,
      color: theme.palette.success.main,
      marginTop: -4,
   },
   avtLink: {
      position: 'relative',
   },
   avt: {
      width: 42,
      borderRadius: '50%',
      height: 42,
   },
   badge: {
      position: 'absolute',
      top: 9,
      right: 5,
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '6px 12px',
      minHeight: 0,
   },
}))
