import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },

   chatContent: {
      padding: 24,
      height: 'calc(100vh - 194px)',
      '@media (max-width: 780px)': {
         height: 'calc(100vh - 252px)',
      },
      overflow: 'scroll',
   },

   noMessage: {
      textAlign: 'center',
      color: '#ccc',
      fontWeight: 400,
   },
}))
