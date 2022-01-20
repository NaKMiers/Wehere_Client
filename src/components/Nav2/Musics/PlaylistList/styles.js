import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   newPlaylistBtn: {
      width: '100%',
      marginBottom: 16,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   playlistCount: {
      textAlign: 'right',
      color: theme.palette.secondary.dark,
      fontSize: 15,
      marginBottom: 8,
   },

   playlistListWrap: {
      overflow: 'scroll',
      position: 'absolute',
      top: 76,
      bottom: 'calc(-100vh + 300px)',
      left: 24,
      right: 24,
   },
}))
