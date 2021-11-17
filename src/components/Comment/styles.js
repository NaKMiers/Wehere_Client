import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   '@global': {},

   collapse: {
      padding: '0 16px',
   },
   comments: {
      padding: 0,
   },
   icon: {
      color: theme.palette.primary.text,
   },
   commentInputWrap: {
      marginTop: 8,
      display: 'flex',
      padding: 0,
   },
   commentAuthor: {
      marginRight: 16,
      marginTop: 10,
   },
   commentTextField: {
      width: '100%',
      '& .MuiFormLabel-root': {
         color: theme.palette.secondary.light,
      },
   },
   commentInput: {
      color: theme.palette.primary.text,
   },
   commentWrap: {
      marginTop: 16,
   },
   commentItem: {
      display: 'flex',
      padding: 0,
      marginBottom: -12,
   },
   commentActions: {
      marginLeft: 52,
   },
   replyCommentItem: {
      display: 'flex',
      marginLeft: 52,
   },
   replyInputWrap: {
      display: 'flex',
      marginLeft: 52,
   },
   linkToProfile: {
      textDecoration: 'none',
   },
}))
