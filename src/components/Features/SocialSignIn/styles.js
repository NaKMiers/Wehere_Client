import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   socialSignInWrap: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 8,
   },
   title: {
      display: 'flex',
      justifyContent: 'space-between',
   },
   btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   socialBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      margin: '8px 4px 0px 4px',
      padding: 8,
      textTransform: 'none',
   },
   socialLogo: {
      marginRight: 8,
      background: '#333333',
      border: `2px solid ${theme.border.main}`,
   },
   text: {
      fontSize: 14,
   },
}))
