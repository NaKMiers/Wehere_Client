import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addVideoBtnBox: {
      position: 'fixed',
      bottom: 28,
      right: 32,
   },
   addVideoBtn: {
      background: theme.palette.primary.gradient,
   },
}))
