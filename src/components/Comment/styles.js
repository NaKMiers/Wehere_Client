import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   collapse: {
      padding: '0 16px'
   },
   comments: {
      borderTop: 'solid #ccc 1px',
      padding: 0
   },
   commentInputWrap: {
      display: 'flex',
      padding: 0
   },
   commentAuthor: {
      marginRight: 16,
      marginTop: 10
   },
   commentInput: {
      width: '100%'
   },
   commentWrap: {
      marginTop: 16
   },
   commentItem: {
      display: 'flex',
      padding: 0,
      marginBottom: -12
   },
   commentActions: {
      marginLeft: 52
   },
   replyCommentItem: {
      display: 'flex',
      marginLeft: 52
   },
   replyInputWrap: {
      display: 'flex',
      marginLeft: 52
   }
}))
