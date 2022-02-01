import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   shortPage: {
      position: 'relative',
      padding: '140px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 84px)',
      },
   },
   addNewShortBtn: {
      position: 'absolute',
      top: 'calc(56px + 24px)',
      height: 36,
      left: '50%',
      width: 'calc(100% - 24px *2)',
      maxWidth: 560,
      transform: 'translateX(-50%)',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      '@media (max-width: 780px)': {
         top: 'calc(100px + 24px)',
      },
   },
}))
