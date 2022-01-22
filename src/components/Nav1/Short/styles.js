import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   card: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column ',
      maxWidth: 560,
      marginBottom: 24,
      margin: 'auto',
      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.3)',
   },
   icon: {
      color: theme.palette.primary.text,
   },
   menuIcon: {
      marginLeft: 8,
   },
   shortWrapItem: {
      padding: '0px 12px 8px 12px',
   },
   shortItem: {
      width: '100%',
      maxHeight: 600,
      borderRadius: 8,
   },

   cardActions: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      right: 8,
      transition: 'bottom 0.2s ease-in-out',
   },
   iconActions: {
      fontSize: 36,
      color: theme.palette.primary.text,
   },
   linkToProfile: {
      textDecoration: 'none',
   },

   commentCollapse: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      bottom: 0,
   },
   commentWrap: {
      height: 280,
      overflow: 'scroll',
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
