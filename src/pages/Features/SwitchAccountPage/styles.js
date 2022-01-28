import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   accList: {
      maxWidth: 960,
      padding: '6px 24px',
      margin: 'auto',
   },
   noAccWrap: {
      margin: 'auto',
      textAlign: 'center',
      marginTop: 24,
   },
   noAccMessage: {
      margin: 'auto',
      fontSize: 36,
      color: theme.border.light,
   },
   link: {
      fontSize: 18,
      color: theme.palette.warning.main,
   },
}))
