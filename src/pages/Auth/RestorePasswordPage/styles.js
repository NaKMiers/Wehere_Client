import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   wrap: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 8,
      overflow: 'hidden',
      width: '45%',
      boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 780px)': {
         width: '95%',
      },
   },
   heading: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      fontSize: 24,
      padding: 6,
      textAlign: 'center',
   },

   body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 16,
   },
   subHeading: {
      fontSize: 16,
   },
   form: {
      justifyContent: 'space-between',
      margin: '8px 0px',
   },
   input: {
      width: '100%',
      padding: '10px 10px',
      border: `1px solid ${theme.palette.secondary.text}`,
      borderRadius: 4,
      fontSize: 16,
      outline: 'none',
      '&:focus': {
         ouline: 'none',
      },
   },
   btnWrap: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 16,
   },
   findBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      marginLeft: 8,
   },
   cancelBtn: {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.text,
   },
}))
