import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addDiaryBtnBox: {
      position: 'fixed',
      bottom: 28,
      right: 32,
   },
   addDiaryBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
