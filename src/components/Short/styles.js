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
      height: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column ',
      maxWidth: 480,
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
   cardMedia: {
      height: '100%',
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
      height: 200,
      overflow: 'scroll',
   },
}))
