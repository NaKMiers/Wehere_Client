import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   card: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      maxWidth: 560,
      marginBottom: 24,
      margin: 'auto',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 4px 0px',
   },
   icon: {
      color: theme.palette.primary.text,
   },
   menuIcon: {
      marginLeft: 8,
   },
   collapse: {
      padding: '0 16px',
   },
   comments: {
      borderTop: 'solid #ccc 1px',
      padding: 0,
      paddingTop: 12,
   },
   commentInputWrap: {
      display: 'flex',
      padding: 0,
   },
   commentAuthor: {
      marginRight: 16,
      marginTop: 10,
   },
   commentInput: {
      width: '100%',
   },
   linkToProfile: {
      textDecoration: 'none',
   },

   videoWrap: {
      margin: '0px 12px',
   },

   videoItem: {
      width: '100%',
      borderRadius: 8,
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '6px 12px',
      minHeight: 0,
   },
}))
