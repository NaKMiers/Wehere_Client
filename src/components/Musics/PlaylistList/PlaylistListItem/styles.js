import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItem: {
      position: 'relative',
      padding: 0,
      marginBottom: 16,
   },
   moreIcon: {
      fontSize: 22,
      color: theme.palette.secondary.main,
   },
   playlistAvt: {
      width: 140,
      borderRadius: 8,
      overflow: 'hidden',
   },
   playlistName: {
      fontWeight: 'bold',
      color: theme.palette.secondary.text,
   },
   songCount: {
      fontSize: 12,
      color: theme.palette.secondary.text,
   },
   playlistBtn: {
      width: '100%',
      height: 140,
      borderRadius: 8,
   },
   moreBtn: {
      position: 'absolute',
      top: 0,
      right: 0,
      cursor: 'pointer',
      padding: 12,
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0,
   },
}))
