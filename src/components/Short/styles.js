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
   menuIcon: {
      marginLeft: 8
   },
   short: {
      position: 'relative',
      height: 'calc(100vh - 32px)',
      display: 'flex',
      flexDirection: 'column '
   },
   cardMedia: {
      height: '100%'
   },
   cardActions: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      right: 8,
      transition: 'bottom 0.2s ease-in-out'
   },
   iconActions: {
      fontSize: 36
   },
   linkToProfile: {
      textDecoration: 'none',
      color: '#fff'
   },

   commentCollapse: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      bottom: 0
   },
   commentWrap: {
      height: 200,
      overflow: 'scroll'
   }
}))
