import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   card: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      maxWidth: 560,
      marginBottom: 24,
      margin: 'auto',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 4px 0px',
   },
   icon: {
      color: theme.palette.primary.text,
   },
   menuIcon: {
      marginLeft: 4,
   },
   linkToProfile: {
      textDecoration: 'none',
   },
}))
