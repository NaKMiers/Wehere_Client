import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   playingBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: theme.palette.primary.gradient,
   },
   playingBarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 40,
      borderBottom: `1px solid ${theme.border.light}`,
      cursor: 'pointer',
   },
   aboutName: {
      display: 'flex',
      flexGrow: '1',
      color: theme.palette.primary.text,
      padding: '8px 0px',
   },
   favoriteBtn: {
      padding: 0,
      color: theme.favoriteIcon.main,
   },
   playingBarCenter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.palette.primary.text,
      padding: '8px 16px',
      height: 40,
      borderBottom: `1px solid ${theme.border.light}`,
   },
   processPlayingBar: {
      borderRadius: 8,
      width: '80%',
      cursor: 'pointer',
      opacity: 0.9,
      '&:hover': {
         opacity: 1,
      },
   },
   playingBarBottom: {
      display: 'flex',
   },
   menuMusicBtn: {
      position: 'relative',
      minWidth: 32,
      padding: '0px 2px 0px 0px',
      backgroundColor: theme.palette.secondary.light,
      borderRadius: 0,
   },
   menuMusicIcon: {
      fontSize: 28,
      fontWeight: 300,
      marginRight: 1,
      color: theme.palette.primary.main,
   },
   audioBtnGroup: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'space-around',
   },
   audioBtn: {
      color: theme.palette.primary.text,
      margin: '0px 8px',
   },
   audioIcon: {
      fontSize: 28,
      fontWeight: 300,
   },
   playBtn: {
      width: 50,
      height: 50,
      border: `3px solid ${theme.border.main}`,
      animation: '$rotate 8s linear infinite',
      animationPlayState: 'running',
      '&:hover': {
         opacity: 0.9,
      },
   },

   pause: {
      animationPlayState: 'paused',
   },

   '@keyframes rotate': {
      '0%': {
         transform: 'rotate(0deg)',
      },
      '100%': {
         transform: 'rotate(360deg)',
      },
   },
}))
