import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   tab: {
      borderTop: `3px solid ${theme.border.dark}`,
      width: '100%',
   },

   friendListItem: {
      display: 'flex',
      justifyContent: 'space-between',
   },

   linkFriendListItem: {
      display: 'flex',
      textDecoration: 'none',
      width: 'calc(100% - 114px)',
      color: theme.palette.secondary.text,
   },

   friendBtn: {
      padding: '2px 8px',
      background: theme.palette.secondary.main,
      color: theme.palette.primary.text,
   },
}))
