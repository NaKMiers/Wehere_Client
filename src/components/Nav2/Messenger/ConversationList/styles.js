import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   cvsList: {
      padding: '8.5px 24px',
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
