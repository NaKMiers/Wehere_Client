import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   playingBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: theme.palette.primary.gradient
   },
   playingBarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 40,
      borderBottom: `1px solid ${theme.border.light}`,
      cursor: 'pointer'
   },
   aboutName: {
      display: 'flex',
      flexGrow: '1',
      color: theme.palette.primary.text,
      padding: '8px 0px'
   },
   favoriteBtn: {
      padding: 0,
      color: theme.favoriteIcon.main
   },
   playingBarCenter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.palette.primary.text,
      padding: '8px 16px',
      height: 40,
      borderBottom: `1px solid ${theme.border.light}`
   },
   processPlayingBar: {
      width: '75%',
      cursor: 'pointer'
   },
   playingBarBottom: {
      display: 'flex'
   },
   menuMusicBtn: {
      position: 'relative',
      minWidth: 32,
      padding: 0,
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 0
   },
   menuMusicIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-30%, -50%)'
   },
   audioBtnGroup: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'space-around'
   },
   audioBtn: {
      color: theme.palette.primary.text
   },
   playBtn: {
      width: 40,
      height: 40,
      border: `3px solid ${theme.border.main}`
   },
   audioIcon: {
      fontSize: 24
   }
}))
