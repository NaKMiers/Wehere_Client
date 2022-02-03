import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   diaryPage: {
      position: 'relative',
      padding: '132px 8px 24px 8px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 76px)',
      },
      maxWidth: 960,
      margin: 'auto',
      overflow: 'scroll',
      height: 'calc(100vh - 194px)',
   },
   addNewDiaryBtn: {
      position: 'absolute',
      top: 80,
      height: 36,
      left: '50%',
      width: 'calc(100% - 24px *2)',
      maxWidth: 960,
      transform: 'translateX(-50%)',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      '@media (max-width: 780px)': {
         top: 'calc(100px + 24px)',
      },
   },
   noDiaryWrap: {
      textAlign: 'center',
   },
   noDiary: {
      fontSize: 36,
      color: theme.border.light,
   },
}))
