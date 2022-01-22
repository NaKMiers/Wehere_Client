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
      height: 'calc(100vh - 250px)',
      overflow: 'scroll',
   },

   link: {
      textDecoration: 'none',
   },
}))
