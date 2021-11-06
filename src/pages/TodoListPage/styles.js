import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addTaskWrap: {
      display: 'flex',
      justifyContent: 'space-between'
   },
   taskTextField: {
      flexGrow: 1,
      marginBottom: 16
   },
   pointTextField: {
      width: '20%'
   },
   inputTextField: {
      padding: '14px 16px'
   },
   addTaskBtn: {
      marginLeft: 16,
      height: 47
   },
   listItemText: {
      fontSize: 18
   },
   paper: {
      overflow: 'auto',
      borderRadius: '4px'
   },
   cardHeader: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '4px 16px'
   },
   pointWrap: {
      position: 'relative',
      background: '#ccc',
      borderRadius: '50%',
      width: 30,
      height: 30
   },
   point: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   },
   actionBtnWrap: {
      margin: 'auto',
      maxWidth: 360,
      justifyContent: 'space-around'
   }
}))
