import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   authorNameHeading: {
      textAlign: 'center',
      fontSize: 24
   },
   newSong: {
      width: '100%',
      marginBottom: 16,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
   },
   songCount: {
      textAlign: 'right',
      color: theme.palette.secondary.dark,
      fontSize: 15,
      marginBottom: 8
   }
}))
