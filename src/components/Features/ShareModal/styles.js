import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      borderRadius: 8,
      overflow: 'hidden',
      outline: 'none',
   },
   heading: {
      textAlign: 'center',
      fontSize: 24,
      padding: 8,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   subHeading: {
      padding: '4px 0px',
      fontSize: 18,
   },
   body: {
      padding: '8px 16px 16px 16px',
   },

   socialIconWrap: {
      whiteSpace: 'nowrap',
      overflow: 'scroll',
   },
   socialIconBtn: {
      width: '25%',
   },

   copyLinkWrap: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 4,
   },
   linkToCopy: {
      flexGrow: 1,
      padding: '4px 6px',
      border: `2px solid ${theme.border.light}`,
      borderRadius: 4,
      overflow: 'scroll',
      height: '100%',
      whiteSpace: 'nowrap',
   },
   copyBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      marginLeft: 8,
   },
}))
