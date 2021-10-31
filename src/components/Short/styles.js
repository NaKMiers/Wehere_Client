import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuIcon: {
      marginLeft: 8
   },
   short: {
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
      bottom: 64,
      right: 8
   },
   iconActions: {
      fontSize: 36
   }
}))
