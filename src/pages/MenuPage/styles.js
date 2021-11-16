import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuItem: {
      padding: '4px 8px',
      minHeight: 0,
   },
   menuIcon: {
      background: theme.palette.primary.main,
   },
   listItemText: {
      fontSize: 18,
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      padding: 8,
   },
}))
