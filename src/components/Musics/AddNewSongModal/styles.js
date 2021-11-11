import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      width: 350,
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '16px 16px 32px 16px'
   },
   heading: {
      padding: '8px 16px',
      textAlign: 'center'
   },
   textField: {
      width: '100%',
      marginBottom: 16
   },
   textFieldFile: {
      content: 'Select some files',
      background: '#e8e8e8',
      padding: '5px 8px',
      cursor: 'pointer',
      marginBottom: 16,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
   },
   label: {
      fontSize: 14,
      cursor: 'pointer'
   },

   submitBtn: {
      width: '100%',
      backgroundColor: '#333',
      color: '#fff'
   }
}))
