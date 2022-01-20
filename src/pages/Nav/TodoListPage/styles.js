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
      maxWidth: '10%',
      '@media (max-width: 780px)': {
         maxWidth: '20%',
      },
   },
   inputTextField: {
      padding: '14px 16px',
      borderBottom: `2px solid ${theme.border.dark}`,
   },
   addTaskBtn1: {
      marginLeft: 16,
      height: 47,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   addTaskBtn2: {
      width: '100%',
      height: 36,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      marginBottom: 16,
      '@media (min-width: 781px)': {
         display: 'none',
      },
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

   formEditing: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   editingInput: {
      outline: 'none',
      fontSize: 18,
      padding: '8.5px 8px',
      borderRadius: 4,
      border: 'none',
      flexGrow: 1,
   },
   editingPoint: {
      outline: 'none',
      fontSize: 18,
      padding: '8.5px 8px',
      borderRadius: 4,
      border: 'none',
      marginLeft: 8,
      width: '8%',
   },
   saveEditBtn: {
      padding: '8.5px 8px',
      marginLeft: 8,
      background: theme.palette.success.main,
      color: theme.palette.primary.text,
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

   noTask: {
      textAlign: 'center',
   },
}))
