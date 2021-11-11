import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItem: {
      position: 'relative',
      padding: 0,
      marginBottom: 16
   },
   playlistAvt: {
      width: 140,
      border: '3px #ddd solid',
      borderRadius: 8,
      overflow: 'hidden'
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
      minHeight: 0,
      padding: '8px 16px',
      fontSize: 18
   },
   menuIcon: {
      marginLeft: 8
   }
}))
