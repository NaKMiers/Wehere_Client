import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuItem: {
      padding: '6px 12px',
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
