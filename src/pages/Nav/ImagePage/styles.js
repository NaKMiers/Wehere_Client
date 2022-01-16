import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addImageBtnBox: {
      position: 'fixed',
      bottom: 28,
      right: 32,
   },
   addImageBtn: {
      background: theme.palette.primary.gradient,
   },
}))
