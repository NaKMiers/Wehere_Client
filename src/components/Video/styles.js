import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   menuIcon: {
      marginLeft: 8
   },
   collapse: {
      padding: '0 16px'
   },
   comments: {
      borderTop: 'solid #ccc 1px',
      padding: 0,
      paddingTop: 12
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
   linkToProfile: {
      textDecoration: 'none',
      color: '#fff'
   }
}))
