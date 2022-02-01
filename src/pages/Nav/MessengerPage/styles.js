import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   MessengerPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '60px 24px 0px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 0px)',
      },
   },
   noCvsWrap: {
      textAlign: 'center',
      marginTop: 24,
   },
   noCvs: {
      fontSize: 36,
      color: theme.border.light,
   },
}))
