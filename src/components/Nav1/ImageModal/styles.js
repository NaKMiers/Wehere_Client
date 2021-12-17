import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minHeight: 200,
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
   imageBoxWrap: {
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

   imagesList: {
      maxHeight: 300,
      overflow: 'scroll',
      borderRadius: 8,
   },
   imageItemWrap: {
      position: 'relative',
   },
   imageItem: {
      marginBottom: 16,
      '&:last-child': {
         marginBottom: 0,
      },
   },
   actionImgBtns: {
      position: 'absolute',
      bottom: 4,
      right: 4,
   },
   removeImgBtn: {
      padding: '4px 8px',
      minWidth: 0,
      background: theme.palette.primary.gradient,
      marginRight: 2,
   },
   changeImgBtn: {
      padding: '4px 8px',
      minWidth: 0,
      background: theme.palette.primary.gradient,
      marginLeft: 2,
   },
   amountImages: {
      position: 'absolute',
      right: 12,
      transform: 'translate(0px, -4px)',
      fontSize: 13,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      padding: '0px 6px',
      borderBottomLeftRadius: 8,
      borderTopRightRadius: 8,
      zIndex: 1,
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
