import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   newSong: {
      width: '100%',
      marginBottom: 16,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   songCount: {
      textAlign: 'right',
      color: theme.palette.secondary.dark,
      fontSize: 15,
      marginBottom: 8,
   },
   nosongs: {
      fontSize: 32,
      color: theme.border.light,
   },

   songListWrap: {
      padding: 16,
      textAlign: 'center',
   },
   songList: {
      height: 'calc(100vh - 250px)',
      overflow: 'scroll',
   },
}))
