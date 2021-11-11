import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: '#555'
      }
   },
   paperSetting: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
      borderRadius: 8,
      outline: 'none',
      padding: '0px 8px',
      paddingBottom: 10
   },
   heading: {
      padding: 12,
      textAlign: 'center'
   },
   playlistList: {
      width: 300,
      height: 450,
      overflow: 'scroll',
      padding: 0
   }
}))
