import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   accountItem: {
      display: 'flex',
      alignItems: 'center',
      borderLeft: 'solid #f44336 3px',
      marginBottom: 16,
      height: 64,
      paddingRight: 4,
      backgroundColor: '#F2F2F2'
   },
   avatar: {
      border: '3px #ddd solid'
   },
   changeAccBtn: {
      padding: '3px 0px',
      margin: '0',
      backgroundColor: '#2196f3'
   },
   changeAccIcon: {
      color: '#F2F2F2'
   },
   showRmIcon: {
      padding: 4
   },
   removeAccBtn: {
      color: '#f44336'
   },
   dialog: {},
   dialogTitle: {
      fontSize: 22,
      padding: '8px 16px',
      backgroundColor: '#333',
      color: '#fff'
   },
   dialogContent: {
      padding: '16px 16px 8px 16px',
      textAlign: 'center'
   },
   dialogBtnWrap: {
      display: 'flex',
      padding: '0px 4px 8px 4px'
   },
   dialogBtn: {
      flexGrow: 1,
      margin: 8
   }
}))
