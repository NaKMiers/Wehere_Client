import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItem: {
      position: 'relative',
      padding: 0,
      marginBottom: 16
   },
   playlistAvt: {
      width: 140,
      // border: `3px solid ${theme.border.light}`,
      borderRadius: 8,
      overflow: 'hidden'
   },
   playlistName: {
      fontWeight: 'bold',
      color: theme.palette.secondary.text
   },
   songCount: {
      fontSize: 12,
      color: theme.palette.secondary.text
   },
   playlistBtn: {
      width: '100%',
      height: 140,
      borderRadius: 8
   },
   moreBtn: {
      position: 'absolute',
      top: 0,
      right: 0
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0
   },
   menuIcon: {
      marginLeft: 8
   }
}))
