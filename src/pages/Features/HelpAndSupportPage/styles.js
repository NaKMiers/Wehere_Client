import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   helpAndSupportPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '66px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 6px)',
      },
   },
   heading: {
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 16,
   },
   textInputArea: {
      width: '100%',
      height: 150,
      outline: 'none',
      border: '2px solid #333',
      borderRadius: 8,
      fontSize: 16,
      padding: '8px 16px',
   },
   submitBtn: {
      marginTop: 8,
      width: '100%',
      fontWeight: 'bold',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
