import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   infoPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '56px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 24px)',
      },
   },
   heading: {
      color: theme.palette.secondary.text,
   },
   top: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      '@media (max-width: 780px)': {
         flexDirection: 'column',
         marginTop: 0,
         textAlign: 'center',
      },
   },

   topLeft: {
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 780px)': {
         flexDirection: 'column',
      },
   },
   avatar: {
      width: 75,
      height: 75,
      '@media (max-width: 780px)': {
         width: 88,
         height: 88,
      },
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
      '@media (max-width: 780px)': {
         marginTop: 12,
      },
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
      '@media (max-width: 780px)': {
         // display: 'none',
      },
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
      '@media (max-width: 780px)': {
         fontSize: 28,
      },
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
      paddingTop: 16,
      marginTop: 24,
      '@media (max-width: 780px)': {
         flexDirection: 'column',
      },
   },
   bottomLeft: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      '@media (max-width: 780px)': {
         width: '100%',
         alignItems: 'flex-start',
      },
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      '@media (max-width: 780px)': {
         width: '100%',
      },
   },
   socialImg: {
      width: 60,
      height: 60,
      margin: 12,
      border: `3px solid ${theme.border.dark}`,
   },
}))
