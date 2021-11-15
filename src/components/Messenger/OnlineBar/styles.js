import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: '3px'
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: theme.palette.primary.main
      },
      '.MuiBadge-colorPrimary': {
         background: theme.palette.success.main,
         border: `1.5px solid ${theme.border.main}`
      }
   },
   onlineBar: {
      padding: 0,
      overflow: 'scroll',
      borderBottom: `2px solid ${theme.palette.secondary.main}`
   },
   menuOnlineBtn: {
      position: 'relative',
      minWidth: 32
   },
   menuOnlineIcon: {
      fontSize: 24,
      fontWeight: 300,
      marginRight: 1,
      color: theme.palette.primary.main
   },
   expandedIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-30%, -50%)'
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
      width: 42,
      height: 42,
      borderRadius: '50%'
   },
   badge: {
      bottom: 52,
      right: -18
   }
}))
