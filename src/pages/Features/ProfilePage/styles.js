import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   profilePage: {
      padding: '56px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 0px)',
      },
   },
   topProfile: {
      margin: 'auto',
      position: 'relative',
      maxWidth: 960,
   },
   bgProfile: {
      minHeight: 200,
      maxHeight: 400,
      height: 'auto',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
   },
   avatarWrap: {
      position: 'absolute',
      border: `6px solid ${theme.border.main}`,
      borderRadius: '50%',
      bottom: '-8%',
      left: '50%',
      transform: 'translateX(-50%)',
   },
   avatar: {
      width: 170,
      height: 170,
      borderRadius: '50%',
   },
   updateAvtBtn: {
      position: 'absolute',
      bottom: 0,
      right: '2%',
      background: theme.palette.default.main,
      width: 44,
      height: 44,
   },
   updateBgBtn: {
      position: 'absolute',
      bottom: '5%',
      right: '1%',
      background: theme.palette.default.main,
      width: 44,
      height: 44,
   },
   saveBgBtn: {
      position: 'absolute',
      bottom: '5%',
      right: '1%',
      background: theme.palette.success.main,
      color: theme.palette.success.text,
      width: 44,
      height: 44,
   },
   saveAvtBtn: {
      position: 'absolute',
      bottom: 0,
      right: '2%',
      background: theme.palette.default.main,
      width: 44,
      height: 44,
   },
   nameAdnGroupActionsWrap: {
      position: 'absolute',
      bottom: -100,
      left: '50%',
      transform: 'translateX(-50%)',
      '@media (min-width: 781px)': {
         bottom: -116,
      },
      '@media (min-width: 464px) and (max-width: 600px)': {
         bottom: -106,
      },
      '@media (min-width: 601px) and (max-width: 780px)': {
         bottom: -108,
      },
   },
   myUsername: {
      position: 'absolute',
      bottom: -60,
      left: '50%',
      transform: 'translate(-50%)',
      fontWeight: 'bold',
      textAlign: 'center',
      '@media (min-width: 781px)': {
         bottom: -76,
      },
      '@media (min-width: 464px) and (max-width: 600px)': {
         bottom: -66,
      },
      '@media (min-width: 601px) and (max-width: 780px)': {
         bottom: -68,
      },
   },
   username: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 4,
   },
   groupActionBtn: {
      display: 'flex',
      justifyContent: 'center',
   },
   actionBtn: {
      background: theme.palette.secondary.dark,
      color: '#fff',
      fontWeight: 'bold',
      margin: '0px 4px',
      padding: '6px 8px',
      height: 37,
   },

   addFriendBtn: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.text,
      fontWeight: 'bold',
      margin: '0px 4px',
      padding: '6px 8px',
      height: 37,
   },

   menuAction: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuActionItem: {
      padding: '4px 8px',
      minHeight: 0,
   },

   bottomProfile: {
      margin: 'auto',
      maxWidth: 960,
      marginTop: 108,
      padding: 16,
   },
   tabsList: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: -10,
   },
   tabButtonsWrap: {
      margin: '8px 0 8px 0',
   },
   tabButton: {
      border: 'none',
      fontWeight: 'bold',
      padding: '6px 16px',
   },
}))
