import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   card: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      maxWidth: 560,
      marginBottom: 24,
      margin: 'auto',
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 4px 0px',
      borderRadius: 8,
   },
   subheader: {
      color: theme.palette.secondary.light,
      opacity: 0.8,
   },
   icon: {
      color: theme.palette.primary.text,
   },
   menuIcon: {
      marginLeft: 4,
   },

   linkToProfile: {
      textDecoration: 'none',
   },

   heartCount: {
      fontSize: 14,
      color: theme.palette.primary.text,
      marginLeft: 4,
   },

   imageWrap: {
      maxHeight: 480,
      overflow: 'scroll',
      padding: '0px 12px',
   },

   imageItem: {
      borderRadius: 8,
      cursor: 'pointer',
      '&:last-child': {
         marginTop: 12,
      },
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
