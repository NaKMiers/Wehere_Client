import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   playingBar: {
      position: 'fixed',
      bottom: -56,
      left: 0,
      right: 0,
      transition: 'all 0.4s linear 0.5s',
      background: theme.palette.primary.gradient,
      '&:hover $playingBarTop': {
         '@media (max-width: 780px)': {
            visibility: 'visible',
         },
      },
      '&:hover $playingBarTopActive': {
         '@media (max-width: 780px)': {
            height: 40,
         },
      },
      '&:hover $processPlayingBarWrap': {
         height: 10,
         opacity: 1,
         marginTop: -4,
      },
      '&:hover $processPlayingBarBottom': {
         opacity: 0,
      },
   },
   hidePlayingBar: {
      display: 'none',
   },
   playingBarActive: {
      bottom: 0,
   },
   playingBarTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      height: 0,
      visibility: 'hidden',
      borderBottom: `1px solid ${theme.border.light}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
   },
   playingBarTopActive: {
      height: 0,
   },
   timeStateTop: {
      color: theme.palette.primary.text,
      marginRight: 8,
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
      width: '28%',
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
      width: '28%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      '@media (max-width: 780px)': {
         display: 'none',
      },
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
      '@media (min-width:781px) and (max-width: 798px)': {
         margin: '0px 4px',
      },
      '@media (max-width: 368px)': {
         margin: '0px 4px',
      },
      '@media (max-width: 345px)': {
         margin: '0px 0px',
      },
   },
   audioBtnCenter: {
      position: 'absolute',
      top: -16,
      left: '50%',
      visibility: 'hidden',
      opacity: 0,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.5s ease-in-out 0.4s',
   },
   audioBtnCenterActive: {
      top: 0,
      visibility: 'visible',
      opacity: 1,
      '&:hover': {
         top: -6,
      },
   },
   startPlayingBtn: {
      position: 'absolute',
      top: 0,
      height: 36,
      width: 100,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      fontWeight: 600,
      letterSpacing: 3,
      transform: 'translate(-50%, -100%)',
      transition: 'all 0.4s ease-in-out',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      border: `2px solid ${theme.border.main}`,
      visibility: 'visible',
      opacity: 1,
      '&:hover': {
         top: -8,
      },
   },
   startPlayingBtnDisabled: {
      visibility: 'hidden',
      opacity: 0,
   },
   audioBtnPrev: {
      color: theme.palette.primary.text,
      margin: '0px 58px 0px 8px',
      '@media (min-width:781px) and (max-width: 798px)': {
         margin: '0px 54px 0px 8px',
      },
      '@media (max-width: 368px)': {
         margin: '0px 54px 0px 8px',
      },
      '@media (max-width: 345px)': {
         margin: '0px 50px 0px 8px',
      },
   },
   audioBtnNext: {
      color: theme.palette.primary.text,
      margin: '0px 8px 0px 58px',
      '@media (min-width:781px) and (max-width: 798px)': {
         margin: '0px 8px 0px 54px',
      },
      '@media (max-width: 368px)': {
         margin: '0px 8px 0px 54px',
      },
      '@media (max-width: 345px)': {
         margin: '0px 8px 0px 50px',
      },
   },
   audioIcon: {
      fontSize: 28,
      fontWeight: 300,
   },
   audioBtnActive: {
      textShadow: `0px 2px 15px ${theme.glow.main}`,
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
      marginTop: -2,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 0,
      transition: 'all 0.2s ease-in-out',
   },

   processPlayingBarBottom: {
      width: '100%',
      height: 2,
      opacity: 0.9,
      margin: 'auto',
      background: '#fff',
      color: '#f44336',
      transition: 'all 0.1s ease-in-out',
      '& .MuiLinearProgress-bar': {
         background: theme.palette.secondary.main,
      },
   },
}))
