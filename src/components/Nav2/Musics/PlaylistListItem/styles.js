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
   playlistThumb: {
      width: 140,
      borderRadius: 8,
      overflow: 'hidden',
   },
   subThumbPL: {
      height: 70,
   },
   subThumbPlSingle: {
      height: 140,
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
}))
