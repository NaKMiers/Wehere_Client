import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: '3px'
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: '#333'
      }
   },
   onlineBar: {
      backgroundColor: '#ddd',
      padding: '0px 0px',
      overflow: 'scroll'
   },
   menuOnlineBtn: {
      position: 'relative',
      minWidth: 32,
      border: 'none'
   },
   menuMusicIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-30%, -50%)',
      color: '#333'
   },
   avatarBtn: {
      width: 64,
      height: 60,
      padding: 0,
      border: 'none'
   },
   link: {
      marginTop: '26px'
   },
   avatar: {
      width: 48,
      height: 48,
      border: '3px #fff solid',
      borderRadius: '50%'
   },
   badge: {
      bottom: 52,
      right: -18
   }
}))
