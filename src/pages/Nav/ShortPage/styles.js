import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addShortBtnBox: {
      position: 'fixed',
      bottom: 28,
      right: 32,
   },
   addShortBtn: {
      background: theme.palette.primary.gradient,
   },
}))
