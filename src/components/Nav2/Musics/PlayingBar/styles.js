import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   // '@global': {
   //    '*::-webkit-scrollbar': {
   //       width: 0,
   //       height: 0,
   //    },
   // },
   playingBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: theme.palette.primary.gradient,
      '&:hover $playingBarTop': {
         '@media (max-width: 780px)': {
            display: 'flex',
         },
      },
      // '&:hover $audioBtnCenter': {
      //    '@media (max-width: 780px)': {
      //       display: 'none',
      //    },
      // },
   },
   playingBarTop: {
      display: 'none',
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
      padding: '0px 16px',
      marginTop: 2,
      height: 20,
   },
   processPlayingBar: {
      borderRadius: 8,
      height: 6,
      width: '80%',
      cursor: 'pointer',
      opacity: 0.9,
      '&:hover': {
         opacity: 1,
      },
      background: '#000',
   },

   playingBarBottom: {
      display: 'flex',
      flexDirection: 'column',
      '&:hover $processPlayingBarWrap': {
         height: 10,
         opacity: 1,
         marginTop: -4,
      },
      '&:hover $processPlayingBarBottom': {
         opacity: 0,
      },
   },
   subPlayBarBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 16px',
      alignItems: 'center',
   },
   aboutNameBottom: {
      display: 'flex',
      color: theme.palette.primary.text,
      padding: '8px 0px',
      width: '30%',
      overflow: 'hidden',
      alignItems: 'center',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   aboutNameBody: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
   },
   timeStateBottom: {
      color: theme.palette.primary.text,
      width: '30%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   volumnBar: {
      width: 100,
      height: 4,
      marginRight: 14,
   },
   favoriteBtnBottom: {
      padding: 0,
      color: theme.favoriteIcon.main,
      marginLeft: 14,
   },
   audioBtnGroup: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-around',
      position: 'relative',
   },
   audioBtn: {
      color: theme.palette.primary.text,
      margin: '0px 8px',
      padding: 8,
   },
   audioBtnCenter: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
   },
   audioBtnPrev: {
      color: theme.palette.primary.text,
      margin: '0px 62px 0px 8px',
   },
   audioBtnNext: {
      color: theme.palette.primary.text,
      margin: '0px 8px 0px 62px',
   },
   audioIcon: {
      fontSize: 28,
      fontWeight: 300,
   },
   playBtn: {
      width: 75,
      height: 75,
      border: `3px solid ${theme.border.main}`,
      animation: '$rotate 8s linear infinite',
      animationPlayState: 'running',
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

   processPlayingBarWrap: {
      display: 'flex',
      height: 0,
      opacity: 0,
      marginTop: -7,
      justifyContent: 'center',
      marginBottom: 6,
      transition: 'height 0.2s ease-in-out',
   },

   processPlayingBarBottom: {
      width: '100%',
      height: 2,
      opacity: 0.9,
      margin: 'auto',
      background: '#fff',
      color: '#f44336',
      transition: 'opacity 0.1s ease-in-out',
      '& .MuiLinearProgress-bar': {
         background: theme.palette.secondary.main,
      },
   },
}))
