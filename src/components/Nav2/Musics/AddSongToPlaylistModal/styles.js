import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
      borderRadius: 8,
      outline: 'none',
      paddingBottom: 10,
      textAlign: 'center',
   },
   heading: {
      padding: 8,
      textAlign: 'center',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   errorMessage: {
      color: theme.palette.danger.main,
      lineHeight: 2,
   },
   playlistList: {
      width: 300,
      height: 450,
      overflow: 'scroll',
      padding: 12,
   },
}))
