import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   heading: {
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 16
   },
   textInputArea: {
      width: '100%',
      height: 150,
      outline: 'none',
      border: '2px solid #333',
      borderRadius: 8,
      fontSize: 16,
      padding: '8px 16px'
   },
   submitBtn: {
      marginTop: 8,
      width: '100%',
      fontWeight: 'bold',
      backgroundColor: '#333',
      color: '#fff'
   }
}))
