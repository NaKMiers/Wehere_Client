import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   newPlaylistBtn: {
      width: '100%',
      marginBottom: 16,
      backgroundColor: '#333',
      color: '#fff'
   },
   playlistCount: {
      textAlign: 'right',
      color: '#aaa',
      fontSize: 15,
      marginBottom: 8
   },
   playlistAvt: {
      width: 140,
      border: '3px #ddd solid',
      borderRadius: 8,
      overflow: 'hidden'
   },
   imgPlaylist: {},
   playlistBtn: {
      width: '100%',
      height: 140,
      borderRadius: 8
   }
}))
