import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiBadge-colorPrimary': {
         background: theme.palette.success.main,
         border: `1.5px solid ${theme.border.main}`,
      },
   },
   userOnlineBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   link: {
      padding: 0,
      height: 42,
   },
   avatar: {
      width: 42,
      height: 42,
      borderRadius: '50%',
   },
   badge: {
      bottom: 49,
      right: -16,
   },
}))
