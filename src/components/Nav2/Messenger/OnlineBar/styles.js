import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: '3px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: theme.palette.primary.main,
      },
      '.MuiBadge-colorPrimary': {
         background: theme.palette.success.main,
         border: `1.5px solid ${theme.border.main}`,
      },
   },
   onlineBar: {
      padding: 0,
      overflow: 'scroll',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
   },
   onlineListLink: {
      marginTop: 5,
   },
   menuOnlineBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      minWidth: 32,
   },

   noFriendOnline: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 8,
   },
}))
