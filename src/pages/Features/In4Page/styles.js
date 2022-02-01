import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   aboutMePage: {
      maxWidth: 960,
      padding: 24,
      margin: 'auto',
   },
   heading: {
      color: theme.palette.secondary.text,
   },
   top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
   },

   topLeft: {
      display: 'flex',
      alignItems: 'center',
   },
   avatar: {
      width: 75,
      height: 75,
   },
   descWrap: {
      marginLeft: 16,
   },
   name: {
      fontSize: 24,
      marginBottom: 6,
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      background: theme.palette.primary.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
   },
   timeAndAdr: {
      fontSize: 15,
      marginBottom: 10,
      color: theme.palette.secondary.text,
   },
   realTime: {
      color: theme.palette.warning.main,
   },

   topRight: {
      display: 'flex',
      flexDirection: 'column',
   },
   upWork: {
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 4,
      color: '#14a800',
   },
   freelancer: {
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 4,
      color: '#29b2fe',
   },
   link: {
      color: theme.palette.warning.main,
   },

   body: {
      marginTop: 24,
      color: theme.palette.secondary.text,
   },
   first: {
      fontSize: 32,
      marginBottom: 8,
   },
   second: {
      fontSize: 16,
   },
   third: {
      fontSize: 16,
   },
   forth: {
      fontSize: 16,
   },
   fifth: {
      fontSize: 16,
   },

   contact: {
      display: 'flex',
      borderTop: `2px solid ${theme.border.dark}`,
      padding: '16px 0px 80px 0px',
      marginTop: 24,
   },
   bottomLeft: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '60%',
      alignItems: 'center',
   },

   contactBasic: {
      fontSize: 16,
   },
   email: {
      fontWeight: 'bold',
      color: '#f44336',
   },
   phone: {
      fontWeight: 'bold',
      color: '#2196f3',
   },
   adr: {
      fontWeight: 'bold',
      color: '#4caf50',
   },

   bottomRight: {
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   socialImg: {
      width: 60,
      height: 60,
      margin: 12,
      border: `3px solid ${theme.border.dark}`,
   },
}))
