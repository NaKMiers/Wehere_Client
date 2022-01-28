import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   friendListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: 8,
      borderBottom: `1px solid ${theme.border.light}`,
      '&:hover': {
         background: theme.palette.secondary.light,
      },
   },

   linkFriendListItem: {
      display: 'flex',
      textDecoration: 'none',
      width: 'calc(100% - 114px)',
      color: theme.palette.secondary.text,
   },

   friendBtn: {
      padding: '2px 8px',
      background: theme.palette.success.main,
      color: theme.palette.primary.text,
   },
}))
