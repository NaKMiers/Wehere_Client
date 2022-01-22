import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   videoPage: {
      padding: '60px 24px 24px 24px',
      marginTop: 24,
      position: 'relative',
   },
   addNewVideoBtn: {
      position: 'absolute',
      top: 0,
      height: 36,
      left: '50%',
      width: 'calc(100% - 24px *2)',
      maxWidth: 560,
      transform: 'translateX(-50%)',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
