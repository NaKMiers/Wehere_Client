import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   title: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '24px 0',
      fontSize: 64,
      background: theme.palette.primary.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
   },
   textField: {
      width: '100%'
   },
   gender: {
      padding: '0px 12px'
   },
   registerBtn: {
      width: '100%',
      padding: 10,
      marginBottom: 16,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
   },
   subOptions: {
      display: 'flex',
      justifyContent: 'space-between'
   },
   radioGroup: {
      justifyContent: 'space-between'
   }
}))
