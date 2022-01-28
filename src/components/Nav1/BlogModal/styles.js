import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      width: 480,
      borderRadius: 8,
      overflow: 'hidden',
      textAlign: 'center',
      outline: 'none',
   },
   title: {
      fontSize: 24,
      textAlign: 'center',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      padding: '6px 16px',
   },
   error: {
      color: theme.palette.danger.main,
      margin: '6px 6px 0px 6px',
   },
   blogBoxWrap: {
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 16px',
   },
   statusText: {
      outline: 'none',
      border: 'none',
      fontSize: 16,
      resize: 'none',
      padding: '8px 0px',
      maxHeight: '55vh',
   },

   actionBtnWrap: {
      borderRadius: 0,
   },

   postBtn: {
      width: '100%',
      marginTop: 8,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
