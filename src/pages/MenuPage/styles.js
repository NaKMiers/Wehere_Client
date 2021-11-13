import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuItem: {
      width: '100%',
      textAlign: 'left'
   },
   menuIcon: {
      background: theme.palette.primary.main
   },
   listItem: {
      padding: '8px 16px'
   },
   listItemText: {
      fontSize: 18
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      width: '100%'
   }
}))
