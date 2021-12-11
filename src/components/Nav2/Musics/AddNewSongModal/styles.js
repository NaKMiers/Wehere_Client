import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      width: 350,
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      borderRadius: 8,
      overflow: 'hidden'
   },
   heading: {
      padding: '8px 16px',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      textAlign: 'center'
   },
   form: {
      padding: '8px 16px 24px 16px'
   },
   textField: {
      width: '100%',
      marginBottom: 16
   },
   textFieldFile: {
      content: 'Select some files',
      background: theme.palette.secondary.light,
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
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
   }
}))
