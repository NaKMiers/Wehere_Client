import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   onlineUserBtn: {
      display: 'flex',
      height: 72,
      padding: 0,
      justifyContent: 'space-between',
      border: 'none',
   },
   link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.secondary.text,
   },
   avatar: {
      width: 42,
      height: 42,
   },
   badge: {
      top: -14,
      right: 4,
   },
   userName: {
      marginLeft: 12,
   },
   moreBtn: {
      cursor: 'pointer',
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0,
   },
}))
