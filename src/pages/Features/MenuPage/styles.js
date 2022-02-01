import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '72px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 16px)',
      },
   },
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
      color: theme.palette.default.text,
      width: '100%',
      padding: 8,
   },
}))
