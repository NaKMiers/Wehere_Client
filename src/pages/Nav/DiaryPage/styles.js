import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   diaryPage: {
      padding: '52px 8px 24px 8px',
      marginTop: 24,
      position: 'relative',
      maxWidth: 960,
      margin: 'auto',
      overflow: 'scroll',
      height: 'calc(100vh - 194px)',
   },
   addNewDiaryBtn: {
      position: 'absolute',
      top: 0,
      height: 36,
      left: '50%',
      width: 'calc(100% - 24px *2)',
      maxWidth: 960,
      transform: 'translateX(-50%)',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   noDiaryWrap: {
      textAlign: 'center',
   },
   noDiary: {
      fontSize: 36,
      color: theme.border.light,
   },
}))
