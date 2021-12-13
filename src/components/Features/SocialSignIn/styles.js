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
      color: theme.palette.primary.text,
      margin: '8px 4px 0px 4px',
      padding: 8,
      textTransform: 'none',
   },
   btn1: {
      background: 'linear-gradient(60deg, #db03e4, #35afff)',
   },
   btn2: {
      background: 'linear-gradient(-60deg, #db03e4, #35afff)',
   },
   socialLogo: {
      marginRight: 6,
      background: 'rgba(51, 51, 51, 0.55)',
      border: `2px solid ${theme.border.main}`,
   },
   text: {
      fontSize: 14,
   },
}))
