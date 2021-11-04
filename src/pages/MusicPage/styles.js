import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   playingBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#333'
   },
   playingBarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 40,
      borderBottom: '1px #ddd solid'
   },
   aboutName: {
      display: 'flex',
      flexGrow: '1',
      color: '#fff',
      padding: '8px 0px'
   },
   favoriteBtn: {
      padding: 0,
      color: '#fff'
   },
   playingBarCenter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      padding: '8px 16px',
      borderBottom: '1px #ddd solid',
      height: 40
   },
   playingBarBottom: {
      display: 'flex'
   },
   menuMusicBtn: {
      position: 'relative',
      minWidth: 32,
      padding: 0,
      backgroundColor: '#ddd',
      borderRadius: 0
   },
   menuMusicIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-30%, -50%)',
      color: '#111'
   },
   audioBtnGroup: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'space-around'
   },
   audioBtn: {
      color: '#fff'
   },
   playBtn: {
      width: 52,
      height: 52,
      border: '3px #fff solid'
   },
   audioIcon: {
      fontSize: 24
   }
}))
