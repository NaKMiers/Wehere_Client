import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minHeight: 200,
      maxWidth: '90%',
      width: 480,
      borderRadius: 8,
      overflow: 'hidden',
   },
   title: {
      fontSize: 24,
      textAlign: 'center',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      padding: '6px 16px',
   },
   videoBoxWrap: {
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
      maxHeight: 150,
      overflow: 'scroll',
   },

   videoItemWrap: {
      position: 'relative',
      overflow: 'scroll',
   },
   videoItem: {
      marginBottom: 16,
      width: '100%',
      borderRadius: 8,
   },

   postBtn: {
      width: '100%',
      marginTop: 8,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
