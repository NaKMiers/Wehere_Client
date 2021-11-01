import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   title: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '24px 0'
   },
   textField: {
      width: '100%',
      marginBottom: 16
   },
   loginBtn: {
      width: '100%',
      padding: 10,
      marginBottom: 16
   },
   subOptions: {
      display: 'flex',
      justifyContent: 'space-between'
   }
}))
