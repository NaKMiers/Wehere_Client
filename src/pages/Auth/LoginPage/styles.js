import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   loginPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: 24,
   },
   title: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '24px 0',
      fontSize: 64,
      background: theme.palette.primary.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
   },
   textField: {
      width: '100%',
   },
   loginBtn: {
      width: '100%',
      padding: 10,
      margin: '16px 0px',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },

   subOptions: {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))
