import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   link: {
      display: 'flex',
      width: '100%',
      textDecoration: 'none',
      color: theme.palette.default.text,
      alignItems: 'center',
   },
   unFriendBtn: {
      padding: '3px 16px',
      background: theme.palette.danger.gradient,
      color: theme.palette.danger.text,
   },
}))
