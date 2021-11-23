import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addTaskWrap: {
      display: 'flex',
      justifyContent: 'space-between',
   },
   taskTextField: {
      flexGrow: 1,
      marginBottom: 16,
      marginRight: 16,
   },
   pointTextField: {
      width: '20%',
   },
   inputTextField: {
      padding: '14px 16px',
      borderBottom: `2px solid ${theme.border.dark}`,
   },
   addTaskBtn: {
      marginLeft: 16,
      height: 47,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },

   taskListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover $deleteTaskBtn, &:hover $editTaskBtn': {
         display: 'block',
      },
   },
   taskWrap: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
   },
   listItemText: {
      fontSize: 18,
   },
   deleteTaskBtn: {
      display: 'none',
      padding: 6,
      marginRight: 4,
   },
   deleteTaskIcon: {
      color: theme.palette.danger.main,
   },

   editTaskBtn: {
      display: 'none',
      padding: 6,
      marginRight: 4,
   },
   editTaskIcon: {
      color: theme.palette.success.main,
   },

   paper: {
      overflow: 'auto',
      borderRadius: '4px',
   },
   cardHeader: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      padding: '4px 16px',
   },
   pointWrap: {
      position: 'relative',
      background: theme.palette.secondary.main,
      color: theme.palette.primary.text,
      borderRadius: '50%',
      width: 30,
      height: 30,
   },
   point: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
   },
   actionBtnWrap: {
      margin: 'auto',
      maxWidth: 360,
      justifyContent: 'space-around',
   },
   todoActionIcon: {
      fontSize: 20,
   },
   todoActionBtnUp: {
      color: theme.palette.primary.main,
   },
   todoActionBtnDown: {
      color: theme.palette.secondary.main,
   },
}))
